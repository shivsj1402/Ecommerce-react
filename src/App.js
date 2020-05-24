import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom' 
import './App.css';
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop-page';
import NavBar from './Components/NavBar/navbar';
import SigninAndRegisterPage from './pages/sign-in-and-regiser-page/sign-in-and-register';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

const HatsPage =() =>{
  return(
    <h1>This is hats page</h1>
  );
}

class App extends Component {
  constructor(){
    super();
    this.state = { 
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount(){
    this.unSubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snap =>{
          this.setState({
            currentUser: {
              id :snap.id,
              ...snap.data()
            }
          })
        })
      }
      this.setState({
        currentUser : userAuth
      })
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
      <div>
         <NavBar currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SigninAndRegisterPage} />
          <Route exact path='/shop/hats' component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
