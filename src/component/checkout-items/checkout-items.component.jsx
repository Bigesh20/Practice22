import './checkout-items.styles.scss'

import { CartContext } from '../cart-context/cart-context.component';
import { useContext } from 'react';



const CheckoutItems =({cartItem}) => {
    const {imageUrl, quantity, price, name} = cartItem;

    const {addCartItem, removeCartItem} = useContext(CartContext)
    const Increment = () => {
        addCartItem(cartItem);
        }

        const Decrement = () => {
            removeCartItem(cartItem);
            }

    return(
        <div className='checkout-item-container'>
   <div className='image-container'>
        <img src={imageUrl} alt={`${name}`}  />
        </div>
        <span className='name'>{name}</span>
        <span className='arrow' onClick={Decrement}>qwerty</span>
        <span className='quantity'>{quantity}</span>
        <span className='arrow' onClick={Increment}>qwerty</span>
        <span className='price'>{price}</span>
        <div className='remove-button'>U+2715</div>

        
        </div>
    )

};

export default CheckoutItems;