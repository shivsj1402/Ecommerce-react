import CartActionTypes from './cart-actiontypes'

export const toggleCartHidden = () =>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItems = (Item) =>({
    type:CartActionTypes.ADD_CARTITEMS,
    payload: Item
});