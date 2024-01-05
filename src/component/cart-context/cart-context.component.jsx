import { createContext, useEffect, useState } from "react";


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addCartItem: () => {},
    cartCount: 0,
    removeCartItem: () => {},
    clearCartItem: () => {},
    cartTotal: 0,
});
const clearedCartItem = (cartItems, productToClear) => {return cartItems.filter(cartItem => cartItem.id !== productToClear.id )}


const addedCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
        ? {...cartItem, quantity:cartItem.quantity +1}
        : cartItem
        );


    }
    

    return [...cartItems, {...productToAdd, quantity:1}]
};


const removedCartItem = (cartItems, productToRemove) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id );
    }
        return cartItems.map((cartItem) => cartItem.id === productToRemove.id
        ? {...cartItem, quantity:cartItem.quantity -1}
        : cartItem
        );


    };

export const CartProvider = ({children}) => {
    const [cartCount, setCartCount] = useState(0);

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const addCartItem = (productToAdd) => {
     setCartItems(addedCartItem(cartItems, productToAdd));
    };
    const clearCartItem = (productToClear) => {
        setCartItems(clearedCartItem(cartItems, productToClear));
    }

    const removeCartItem = (productToRemove) => {
        setCartItems(removedCartItem(cartItems, productToRemove));
       };

    useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0) 
    setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price, 0) 
        setCartTotal(newCartTotal);
        }, [cartItems])

    const value = {isCartOpen, setIsCartOpen, cartItems, addCartItem, cartCount, removeCartItem, clearCartItem, cartTotal};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
