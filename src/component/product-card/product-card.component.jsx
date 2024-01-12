import './product-card.styles.scss'
import Button, {BUTTON_TYPES} from '../button/button.component';
import { useContext } from 'react';
import { CartContext } from '../cart-context/cart-context.component';

const ProductCard = ({product}) => {
    const {imageUrl, name, price} = product;

    const {addCartItem} = useContext(CartContext)

    const addItemToCart = () => addCartItem(product);



    return(
        <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
        <span className='name'> {name} </span>
        <span className='price'> {price} </span>
        </div>
        <Button buttonType={BUTTON_TYPES.inverted} onClick={addItemToCart}>ADD TO CART</Button>
        </div>
    )
}

export default ProductCard;