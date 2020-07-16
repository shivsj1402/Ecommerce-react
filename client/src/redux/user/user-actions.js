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

export const checkUserSession = ()=>({
    type:UserActionTypes.CHECK_USER_SESSION
})

export const signoutStart = ()=>({
    type:UserActionTypes.SIGN_OUT_START
})

export const signoutSuccess = ()=>({
    type:UserActionTypes.SIGN_OUT_SUCCESS
})

export const signoutFailure = (errorMessage)=>({
    type:UserActionTypes.SIGN_OUT_FAILURE,
    payload:errorMessage
})

export const SignupStart = (signupData) =>({
    type: UserActionTypes.SIGN_UP_START,
    payload:signupData
});

export const signupSuccess = ({user, additionalData}) =>({
    type:UserActionTypes.SIGN_UP_SUCCESS,
    payload:{user, additionalData}
});

export const signupFailure = (errorMessage) =>({
    type:UserActionTypes.SIGN_UP_FAILURE,
    payload:errorMessage
});