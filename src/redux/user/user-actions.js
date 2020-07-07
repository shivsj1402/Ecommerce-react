import UserActionTypes from './user-actiontypes'

export const googleSigninStart = () =>({
    type: UserActionTypes.GOOGLE_SIGNIN_START
});

export const emailSigninStart = (emailAndPassword) =>({
    type: UserActionTypes.EMAIL_SIGNIN_START,
    payload:emailAndPassword
});

export const signinSuccess = (user) =>({
    type:UserActionTypes.SIGNIN_SUCCESS,
    payload:user
});

export const signinFailure = (errorMessage) =>({
    type:UserActionTypes.SIGNIN_FAILURE,
    payload:errorMessage
});