import React from 'react';
import { Link }  from 'react-router-dom';
import { connect }from 'react-redux';
import { ReactComponent  as Logo}  from '../../assets/Logo.svg';
import './navbar.scss';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../Cart-icon/cart-icon';
import CartDropdown from '../Cart-dropdown/cart-dropdown';

function NavBar({currentUser, hidden}) {
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

const mapStateToProps= state =>({
currentUser : state.user.currentUser,
hidden : state.cart.hidden
})

export default connect(mapStateToProps)(NavBar);