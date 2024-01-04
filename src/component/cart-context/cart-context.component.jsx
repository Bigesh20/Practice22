import { createContext, useEffect, useState } from "react";

const addedCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
        ? {...cartItem, quantity:cartItem.quantity +1}
        : cartItem
        );


    }
    

    return [...cartItems, {...productToAdd, quantity:1}]
}

const removedCartItem = (cartItems, productToRemove) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToRemove.id);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id );
    }
        return cartItems.map((cartItem) => cartItem.id === productToRemove.id
        ? {...cartItem, quantity:cartItem.quantity -1}
        : cartItem
        );


    }
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addCartItem: () => {},
    cartCount: 0,
    removeCartItem: () => {},
});


export const CartProvider = ({children}) => {
    const [cartCount, setCartCount] = useState(0);

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addCartItem = (productToAdd) => {
     setCartItems(addedCartItem(cartItems, productToAdd));
    };

    const removeCartItem = (productToRemove) => {
        setCartItems(removedCartItem(cartItems, productToRemove));
       };

    useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0) 
    setCartCount(newCartCount);
    }, [cartItems])

    const value = {isCartOpen, setIsCartOpen, cartItems, addCartItem, cartCount, removeCartItem};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}
