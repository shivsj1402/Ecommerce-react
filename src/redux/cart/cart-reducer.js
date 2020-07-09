import CartActionTypes from './cart-actiontypes'
import { addItemtoCart, removeItemsfromCart } from './cart-utils'

const INITIAL_STATE ={
    hidden: true,
    cartItems: []
};
const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                 ...state,
                 hidden : !state.hidden,
            };
        case CartActionTypes.ADD_CARTITEMS:
             return{
                 ...state,
                cartItems: addItemtoCart(state.cartItems,action.payload)
             }
        case CartActionTypes.REMOVE_ITEMS:
            return{
                ...state,
                cartItems: removeItemsfromCart(state.cartItems,action.payload)
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(item => item.id!==action.payload.id)
            }

        case CartActionTypes.CLEAR_CART:
            return{
                ...state,
                cartItems:[],
                hidden:true
            }

        default:
            return state;
    }

}

export default cartReducer;