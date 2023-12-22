import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {ReactComponent as CrownLogo} from '../images/crown.svg'
import './navigation.styles.scss'
const Navigation =() => {
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
       </div>
       </div>
       <Outlet />
       </Fragment>
    )

};

export default Navigation;