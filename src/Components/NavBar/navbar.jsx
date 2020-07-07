import React from 'react';
import { connect }from 'react-redux';
import { ReactComponent  as Logo}  from '../../assets/Logo.svg';
import { createStructuredSelector } from 'reselect';

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../Cart-icon/cart-icon';
import CartDropdown from '../Cart-dropdown/cart-dropdown';
import { selectCurrentUser } from '../../redux/user/user-selector'
import { selectHiddenValue } from '../../redux/cart/cart-selectors'

import {HeaderContainer, LogoContainer,OptionsContainer, OptionLink} from './navbar.styles'

function NavBar({currentUser, hidden}) {
  return (
      <HeaderContainer>
          <LogoContainer to ="/">
            <Logo/>    
          </LogoContainer>
          <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            {
              currentUser ?
              <OptionLink as='div' onClick={()=>{auth.signOut()}}>SIGN-OUT</OptionLink>
              :<OptionLink to="/signin">SIGN-IN</OptionLink>
            }
          <CartIcon />
          </OptionsContainer>
          {hidden?null :<CartDropdown />}
      </HeaderContainer>
    
  );
}

const mapStateToProps= createStructuredSelector({
currentUser : selectCurrentUser,
hidden : selectHiddenValue
})

export default connect(mapStateToProps)(NavBar);