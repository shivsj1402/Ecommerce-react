export const addItemtoCart = (cartItems, cartItemToAdd)=>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id 
            ? {...cartItem, quantity: cartItem.quantity+1}
            : cartItem
        )
    }

    return[...cartItems, {...cartItemToAdd,quantity:1}]
}

export const removeItemsfromCart =(cartItems, cartItemToRemove)=>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem =>
            cartItem.id !== cartItemToRemove.id 
        )
    }

    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity-1}
        : cartItem
    )
}

export const filterItemsFromCart = (cartItems, item) =>{
    return cartItems.filter(cartItem => cartItem.id!==item.id)
}

export const getCartItemCount = (cartItems) => cartItems.reduce((acc,item)=>item.quantity+acc, 0);

export const getCartTotal = (cartItems) => cartItems.reduce((Price,item)=>(item.price*item.quantity)+Price, 0)