import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom' 
import './App.css';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop-page';
import NavBar from './Components/NavBar/navbar';
import SigninAndRegisterPage from './pages/sign-in-and-regiser-page/sign-in-and-register';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect }from 'react-redux'

import { setCurrentUser } from './redux/user/user-actions' 

const HatsPage =() =>{
  return(
    <h1>This is hats page</h1>
  );
}

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
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={()=>this.props.currentUser? (<Redirect to='/' />) : (<SigninAndRegisterPage />)} />
          <Route exact path='/shop/hats' component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps= state =>({
  currentUser : state.user.currentUser
  })


const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
