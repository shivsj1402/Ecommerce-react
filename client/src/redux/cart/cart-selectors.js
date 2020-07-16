import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectHiddenValue = createSelector(
    [selectCart],
    (cart) => cart.hidden 
)

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc,item)=>item.quantity+acc, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((Price,item)=>(item.price*item.quantity)+Price, 0)
);
