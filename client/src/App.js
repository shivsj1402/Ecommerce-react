import React, { useEffect } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom' 
import { createStructuredSelector } from 'reselect'
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop-page';
import NavBar from './Components/NavBar/navbar';
import SigninAndRegisterPage from './pages/sign-in-and-regiser-page/sign-in-and-register';
import { selectCurrentUser } from './redux/user/user-selector'
import { connect }from 'react-redux';
import CheckoutPage from './pages/checkout/checkout';
import { checkUserSession } from './redux/user/user-actions'
import { GlobalStyle } from './global.styles';

const App = ({checkUserSession, currentUser} ) =>{
  useEffect(()=>{
    checkUserSession();
  }, [checkUserSession])
  return (
    <div>
        <GlobalStyle />
        <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={()=>currentUser? (<Redirect to='/' />) : (<SigninAndRegisterPage />)} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps= createStructuredSelector({
  currentUser : selectCurrentUser
  })

const mapDispatchToProps = dispatch =>({
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
