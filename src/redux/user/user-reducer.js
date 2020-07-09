import UserActionTypes from './user-actiontypes'

const INITIAL_STATE ={
    currentUser :null,
    errorMsg: null
};
const userReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case UserActionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser : action.payload,
                errorMsg:null
            };
        
        case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser : null,
                errorMsg:null
            };

        case UserActionTypes.SIGNIN_FAILURE:
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:
            return {
                ...state,
                errorMsg : action.payload
           };

        default:
            return state;
    }

}

export default userReducer;