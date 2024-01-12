import './cart-icon.styles.jsx'

import { useContext } from 'react';
import { CartContext } from '../cart-context/cart-context.component';
import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles.jsx';

const CartIcon =() => {
 const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
 const toggle = () => setIsCartOpen(!isCartOpen)

    return(
        <CartIconContainer onClick={toggle}>
        <ShoppingIcon  />
        <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
};

export default CartIcon;