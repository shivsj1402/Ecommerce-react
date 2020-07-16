import CartActionTypes from './cart-actiontypes'

export const toggleCartHidden = () =>({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItems = (Item) =>({
    type:CartActionTypes.ADD_CARTITEMS,
    payload: Item
});

export const clearCartItem = (Item) =>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:Item
});

export const removeCartItems = (Item) =>({
    type:CartActionTypes.REMOVE_ITEMS,
    payload: Item
});

export const clearCart = () =>({
    type:CartActionTypes.CLEAR_CART
})
