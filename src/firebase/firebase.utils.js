import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDdrtI57WiMA5nheNvwGL61bm2SOFgyLUU",
    authDomain: "crown-db-57d15.firebaseapp.com",
    databaseURL: "https://crown-db-57d15.firebaseio.com",
    projectId: "crown-db-57d15",
    storageBucket: "crown-db-57d15.appspot.com",
    messagingSenderId: "11512307749",
    appId: "1:11512307749:web:f6b78c78965d87ca341fcc",
    measurementId: "G-HHFSZZD8NH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({
      prompt:'select_account'
  })

  export const signInWithGoogle = () =>{
      auth.signInWithPopup(provider)
  }

  export default firebase;