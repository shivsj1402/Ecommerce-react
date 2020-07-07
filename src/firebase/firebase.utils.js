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

  // firebased util for user signup

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

  // util that can used to add new collection and documents to the firestore
  export const addCollectionandDocuments = async (collectionKey, objectsToAdd) =>{

    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(element => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, element);
    });

   return await batch.commit();
}

export const ConvertCollectionsSnapshotToMap= (collections)=>{

    const transformedCollection = collections.docs.map(doc =>{ 
        const {title, items} = doc.data();
        return{
            routeName : encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((acc, collection)=>{
        acc[collection.title.toLowerCase()]=collection;
        return acc;
    },{});
}

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const googleProvider = new firebase.auth.GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt:'select_account'
  })

//   export const signInWithGoogle = () =>{
//       auth.signInWithPopup(googleProvider)
//   }

  export default firebase;