import {takeLatest, call, put, all} from 'redux-saga/effects';
import UserActionTypes from '../user/user-actiontypes'
import { clearCart } from './cart-actions';

export function* clearCartOnSignout(){
    yield put(clearCart());
}

export function* onSignoutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignout)
}

export function* cartSaga(){
    yield all([
        call(onSignoutSuccess)
    ]);
}