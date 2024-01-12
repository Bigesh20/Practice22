import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import {ReactComponent as CrownLogo} from '../images/crown.svg'
import { UserContext } from '../../contexts/contexts';
import { signOutUser } from '../../utils/firebaseUtils/firebase-utils.component';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdowm/cart-dropdown.component';
import { CartContext } from '../cart-context/cart-context.component';
import { NavigationContainer, LogoContainer, NavLinks, NavLink  } from './navigation.styles';




const Navigation =() => {

    const {currentUser} = useContext(UserContext);

    const {isCartOpen} = useContext(CartContext);
   
    
    
    return(
       <Fragment>
       <NavigationContainer>
       <LogoContainer to='/'>
       <div>{<CrownLogo />}
       </div>
       </LogoContainer>
       <NavLinks>
       <NavLink to='/shop'>
       <div>SHOP</div>
       </NavLink>
       {currentUser ? (
        <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
       )
       :
       (
        <NavLink to='/auth'>
        <div>Sign In</div>
        </NavLink>
       )

    }
       <CartIcon />
      

       </NavLinks>
       {isCartOpen && <CartDropdown /> } 
       </NavigationContainer>
       <Outlet />
       </Fragment>
    )

};

export default Navigation;