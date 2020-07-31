import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom' 
import { createStructuredSelector } from 'reselect'
import './App.css';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop-page';
import {default as NavBar} from './Components/NavBar/navbar.container';
import SigninAndRegisterPage from './pages/sign-in-and-regiser-page/sign-in-and-register';
import { selectCurrentUser } from './redux/user/user-selector'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect }from 'react-redux'

import { setCurrentUser } from './redux/user/user-actions' 
import CheckoutPage from './pages/checkout/checkout';

class App extends Component {

  unSubscribeFromAuth = null;
  
  componentDidMount(){
    const {setCurrentUser}= this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snap =>{
          setCurrentUser({
            id :snap.id,
            ...snap.data()
          })
          });
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
         <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={()=>this.props.currentUser? (<Redirect to='/' />) : (<SigninAndRegisterPage />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps= createStructuredSelector({
  currentUser : selectCurrentUser
  })


const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
