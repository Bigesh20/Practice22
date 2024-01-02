import Button from '../button/button.component';
import './cart-dropdown.styles.scss'
import CartItem from '../cart-items/cart-item.component';
import { useContext } from 'react';
import { CartContext } from '../cart-context/cart-context.component';

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);

    return(
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {cartItems.map(item => <CartItem cartItem={item} />)}
        </div>
        <Button>Go to CheckOut</Button>
        </div>
    )
};

export default CartDropdown;