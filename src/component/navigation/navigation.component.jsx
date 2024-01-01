import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {ReactComponent as CrownLogo} from '../images/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../contexts/contexts';
import { signOutUser } from '../../utils/firebaseUtils/firebase-utils.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdowm/cart-dropdown.component';
import { CartContext } from '../cart-context/cart-context.component';




const Navigation =() => {

    const {currentUser} = useContext(UserContext);

    const {isCartOpen} = useContext(CartContext);
   
    
    
    return(
       <Fragment>
       <div className='navigation'>
       <Link className='logo-container' to='/'>
       <div>{<CrownLogo />}
       </div>
       </Link>
       <div className='nav-links-container'>
       <Link className='nav-link' to='/shop'>
       <div>SHOP</div>
       </Link>
       {currentUser ? (
        <span className='nav-link' onClick={signOutUser}>Sign Out</span>
       )
       :
       (
        <Link  className='nav-link' to='/auth'>
        <div>Sign In</div>
        </Link>
       )

    }
       <CartIcon />
      

       </div>
       {isCartOpen && <CartDropdown /> } 
       </div>
       <Outlet />
       </Fragment>
    )

};

export default Navigation;