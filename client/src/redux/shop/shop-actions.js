import ShopActionTypes from './shop-actiontypes'

export const fetchCollectionsStart = () =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});
//replaced this section of code in redux-sagas
// export const fetchCollectionsStartAsync = () =>{
//     return dispatch =>{
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart());
//             //with collectionref
//             collectionRef.get().then(snapshot =>{
//                 const collectionMap = ConvertCollectionsSnapshotToMap(snapshot);
//                 dispatch(fetchCollectionsSuccess(collectionMap));
//             }).catch(error => dispatch(fetchCollectionsFailure(error.message)))

//         //Using Obeserver pattern(onSnapShot) provided by firebase.
//         // collectionRef.onSnapshot( async snapshot =>{
//         //     const collectionMap = ConvertCollectionsSnapshotToMap(snapshot);
//         //     updateCollections(collectionMap);
//         //     this.setState({loading:false})
//         // });
//     }
// }

export const fetchCollectionsSuccess = collectionsMap =>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
});

export const fetchCollectionsFailure = errorMessage =>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
});