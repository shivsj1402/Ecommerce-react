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

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
      if(!userAuth) return;
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const userSnap = await userRef.get();
        if(!userSnap.exists){
            const { displayName , email } = userAuth;
            const createdAt = new Date();
            try{
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            }catch (err){
                console.log("error creating user", err.message)
            }
        }
    return userRef;
  }

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