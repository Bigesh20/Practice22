import Button from '../button/button.component';
import './cart-dropdown.styles.jsx'
import CartItem from '../cart-items/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../cart-context/cart-context.component';
import { useNavigate } from 'react-router-dom';
import { CartDropDownContainer, EmptyMessage, CartItems  } from './cart-dropdown.styles.jsx';

const CartDropdown = () => {

    const navigate = useNavigate();
    const {cartItems} = useContext(CartContext);
    const CheckOutButton = () => {
        navigate('/checkout')
    }

    return(
        <CartDropDownContainer>
        <CartItems>

        {
            cartItems.length ? (
                cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)) : (
               <EmptyMessage>Your Cart is Empty</EmptyMessage>
                )
        }
        {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
        </CartItems>
        <Button onClick={CheckOutButton}>Go to CheckOut</Button>
        </CartDropDownContainer>
    )
};

export default CartDropdown;