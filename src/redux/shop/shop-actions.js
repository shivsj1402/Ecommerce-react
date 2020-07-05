import ShopActionTypes from './shop-actiontypes'
import { firestore, ConvertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsStartAsync = () =>{
    return dispatch =>{
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        //using promises pattern
            //Using fetch calls
            // fetch('https://firestore.googleapis.com/v1/projects/crown-db-57d15/databases/(default)/documents/collections')
            // .then(response => response.json())
            // .then(collections => console.log(collections))
            // the fetch is nested a lot and will be confusing to work with.

            //with collectionref
            collectionRef.get().then(snapshot =>{
                const collectionMap = ConvertCollectionsSnapshotToMap(snapshot);
                dispatch(fetchCollectionsSuccess(collectionMap));
            }).catch(error => dispatch(fetchCollectionsFailure(error.message)))

        //Using Obeserver pattern(onSnapShot) provided by firebase.
        // collectionRef.onSnapshot( async snapshot =>{
        //     const collectionMap = ConvertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionMap);
        //     this.setState({loading:false})
        // });
    }
}

export const fetchCollectionsSuccess = collectionsMap =>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
});

export const fetchCollectionsFailure = errorMessage =>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
});