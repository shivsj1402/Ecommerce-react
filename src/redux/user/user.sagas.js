import {takeLatest, call, put, all} from 'redux-saga/effects';
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import {signinSuccess, signinFailure} from './user-actions';

import UserActionTypes from './user-actiontypes';

export function* getSnapshotFromUserAuth(userAuth){
    try{
        const userRef = yield call(createUserProfileDocument,userAuth);
        const userSnapShot = yield userRef.get();
        yield put(signinSuccess({id: userSnapShot.id, ...userSnapShot.data()}))
    }catch(error){
        yield put(signinFailure(error.message))
}

}

export function* googleSigninAsync(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield call(getSnapshotFromUserAuth,user)
    }catch(error){
        yield put(signinFailure(error.message))
    }
}

export function* emailSigninAsync({payload : {email, password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield call(getSnapshotFromUserAuth,user)
     }catch(error){
        yield put(signinFailure(error.message))
     }  
}

export function* onGoogleSigninStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START,googleSigninAsync)
}

export function* onEmailSigninStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START,emailSigninAsync)
}

export function* userSaga(){
    yield all([
        call(onGoogleSigninStart),call(onEmailSigninStart)
    ]);
}