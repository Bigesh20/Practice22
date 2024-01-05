import Button from '../button/button.component';
import './cart-dropdown.styles.scss'
import CartItem from '../cart-items/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../cart-context/cart-context.component';
import { useNavigate } from 'react-router-dom';

const CartDropdown = () => {

    const navigate = useNavigate();
    const {cartItems} = useContext(CartContext);
    const CheckOutButton = () => {
        navigate('/checkout')
    }

    return(
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
        </div>
        <Button onClick={CheckOutButton}>Go to CheckOut</Button>
        </div>
    )
};

export default CartDropdown;