import React,{ useContext } from 'react';
import { Link }  from 'react-router-dom';
import { ReactComponent  as Logo}  from '../../assets/Logo.svg';

import './navbar.scss';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../Cart-icon/cart-icon';
import CartDropdown from '../Cart-dropdown/cart-dropdown';
import CurrentUserContext from '../../contexts/user/user.context'
import { CartContext } from '../../providers/cart/cart.provider'
function NavBar() {
  const currentUser = useContext(CurrentUserContext)
  const {hidden} = useContext(CartContext)
  return (
      <div className="header">
          <Link className="logo-container" to ="/">
            <Logo className="logo"/>    
          </Link>
          <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/shop">CONTACT</Link>
            {
              currentUser ?
              <div className="option" onClick={()=>{auth.signOut()}}>SIGN-OUT</div>
              :<Link className="option" to="/signin">SIGN-IN</Link>
            }
            <CartIcon />
          </div>
          {hidden?null :<CartDropdown />}
      </div>
    
  );
}

export default NavBar;