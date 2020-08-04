import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom' 
import { createStructuredSelector } from 'reselect'
import NavBar from './Components/NavBar/navbar';
import { selectCurrentUser } from './redux/user/user-selector'
import { connect }from 'react-redux';
import { checkUserSession } from './redux/user/user-actions'
import { GlobalStyle } from './global.styles';
import Spinner from './Components/spinner/spinner';
import ErrorBoundary from './Components/error-boundary/error-boundry'

const HomePage = lazy(()=> import('./pages/homepage/homepage'));
const ShopPage = lazy(()=> import('./pages/shop/shop-page'));
const CheckoutPage = lazy(()=> import('./pages/checkout/checkout'));
const SigninAndRegisterPage = lazy(()=> import('./pages/sign-in-and-regiser-page/sign-in-and-register'));

const App = ({checkUserSession, currentUser} ) =>{
  useEffect(()=>{
    checkUserSession();
  }, [checkUserSession])
  return (
    <div>
        <GlobalStyle />
        <NavBar />
      <Switch>
        <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={()=>currentUser? (<Redirect to='/' />) : (<SigninAndRegisterPage />)} />
        <Route exact path='/checkout' component={CheckoutPage} />
        </Suspense>
        </ErrorBoundary>
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
