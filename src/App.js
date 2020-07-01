import React, { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom' 
import { createStructuredSelector } from 'reselect'
import './App.css';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop-page';
import NavBar from './Components/NavBar/navbar';
import SigninAndRegisterPage from './pages/sign-in-and-regiser-page/sign-in-and-register';
import { selectCurrentUser } from './redux/user/user-selector'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect }from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions' 
import CheckoutPage from './pages/checkout/checkout';

class App extends Component {

  unSubscribeFromAuth = null;
  
  componentDidMount(){
    const {setCurrentUser}= this.props;
    //onAuthStateChanged looks changes in the user authentication from firebase authentication section
    // this block of code creates a new user once the user on the firestore is signed up in authentication firebase
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        //onSnapshot looks for snapshot changes from firebase and sets the current user in the store using redux actions 
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
