import './cart-icon.styles.scss'
import {ReactComponent as ShoppingBag } from '../images/shopping-bag.svg'
import { useContext } from 'react';
import { CartContext } from '../cart-context/cart-context.component';

const CartIcon =() => {
 const {isCartOpen, setIsCartOpen} = useContext(CartContext);
 const toggle = () => setIsCartOpen(!isCartOpen)

    return(
        <div className='cart-icon-container' onClick={toggle}>
        <ShoppingBag className='shopping-icon' />
        <span className='item-count'>0</span>
        </div>
    )
};

export default CartIcon;