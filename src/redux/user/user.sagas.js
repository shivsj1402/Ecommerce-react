import {takeLatest, call, put, all} from 'redux-saga/effects';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser,  } from '../../firebase/firebase.utils';
import {signinSuccess, signinFailure,signoutSuccess, signoutFailure, signupSuccess, signupFailure} from './user-actions';

import UserActionTypes from './user-actiontypes';

export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try{
        const userRef = yield call(createUserProfileDocument,userAuth, additionalData);
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

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        yield call(getSnapshotFromUserAuth,userAuth)
    }catch(error){
        yield put(signinFailure(error.message))
    }
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* Signout(){
    try{
        yield auth.signOut();
        yield put(signoutSuccess());
    }catch(error){
        yield put(signoutFailure(error.message))
    }
    
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,Signout)
}

export function* SignUp({payload : {email, password, displayName}}){
    try{
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signupSuccess({user, additionalData:{displayName}}))
     }catch(error){
        yield put(signupFailure(error.message))
     } 
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START,SignUp)
}

export function* signInAfterSignUp({payload:{ user, additionalData}}){
    yield call(getSnapshotFromUserAuth,user, additionalData)
}

export function* onSignupSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSaga(){
    yield all([
        call(onGoogleSigninStart),call(onEmailSigninStart), call(onCheckUserSession),call(onSignOutStart), call(onSignUpStart), call(onSignupSuccess)
    ]);
}