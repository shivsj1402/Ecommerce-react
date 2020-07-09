import React from 'react';
import { connect }from 'react-redux';
import { ReactComponent  as Logo}  from '../../assets/Logo.svg';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../Cart-icon/cart-icon';
import CartDropdown from '../Cart-dropdown/cart-dropdown';
import { selectCurrentUser } from '../../redux/user/user-selector'
import { selectHiddenValue } from '../../redux/cart/cart-selectors'
import { signoutStart } from '../../redux/user/user-actions'

import {HeaderContainer, LogoContainer,OptionsContainer, OptionLink} from './navbar.styles'

function NavBar({currentUser, hidden, signoutStart}) {
  return (
      <HeaderContainer>
          <LogoContainer to ="/">
            <Logo/>    
          </LogoContainer>
          <OptionsContainer>
            <OptionLink to="/shop">SHOP</OptionLink>
            {
              currentUser ?
              <OptionLink as='div' onClick={signoutStart}>SIGN-OUT</OptionLink>
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

const mapDispatchToProps = dispatch =>({
  signoutStart : () => dispatch(signoutStart())
})


export default connect(mapStateToProps,mapDispatchToProps)(NavBar);