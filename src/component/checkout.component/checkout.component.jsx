import './checkout.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../cart-context/cart-context.component';
import CheckoutItems from '../checkout-items/checkout-items.component';

const Checkout = () => {
const {cartItems} = useContext(CartContext);
    return (
        <div className='checkout-container'>
        <div className='checkout-header'> 
        <div className='header-block'>
        <span> Product </span>
        </div>
        <div className='header-block'>
        <span> Description </span>
        </div>
        <div className='header-block'>
        <span> Quantity </span>
        </div>
        <div className='header-block'>
        <span> Price </span>
        </div>
        <div className='header-block'>
        <span> Remove </span>
        </div>
        </div>
        {cartItems.map(cartItem => <CheckoutItems key={cartItem.id} cartItem={cartItem} />

        )}
        <span className='total'>Total: 0</span>

        </div>    
    )
};

export default Checkout;