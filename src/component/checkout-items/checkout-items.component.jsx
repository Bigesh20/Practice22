import './checkout-items.styles.scss'

import { CartContext } from '../cart-context/cart-context.component';
import { useContext } from 'react';



const CheckoutItems = ({cartItem}) => {

   
 
    const {imageUrl, quantity, price, name} = cartItem;

    const {addCartItem, removeCartItem , clearCartItem} = useContext(CartContext);
    const RemoveButton = () => {
     clearCartItem(cartItem);
    }
   
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
        <span className='quantity'>
        <div className='arrow' onClick={Decrement}>&lt;</div>
        {quantity}
        <div className='arrow' onClick={Increment}>&gt;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={RemoveButton}>&#10005;</div>
        </div>
    )

};

export default CheckoutItems;