import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom' 
import './App.css';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop-page';
import NavBar from './Components/NavBar/navbar';
import SigninAndRegisterPage from './pages/sign-in-and-regiser-page/sign-in-and-register';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

import CheckoutPage from './pages/checkout/checkout';
import CurrentUserContext from './contexts/user/user.context'

class App extends Component {
  constructor(){
    super();

    this.state ={
      currentUser: null
    }
  }
  unSubscribeFromAuth = null;
  
  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snap =>{
          this.setState({currentUser : {
            id :snap.id,
            ...snap.data()
          }})
          });
      }
      this.setState({currentUser: userAuth});
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <NavBar />
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={()=>this.state.currentUser? (<Redirect to='/' />) : (<SigninAndRegisterPage />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
