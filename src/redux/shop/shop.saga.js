import {takeLatest, call, put, all} from 'redux-saga/effects';
import { firestore, ConvertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop-actions';

import ShopActionTypes from './shop-actiontypes';

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(ConvertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionMap));
    }catch (error){
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync)
}

export function* shopSaga(){
    yield all([
        call(fetchCollectionsStart)
    ]);
}