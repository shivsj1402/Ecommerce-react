import React, { createContext, useState, useEffect} from 'react';
import {addItemtoCart, removeItemsfromCart, filterItemsFromCart,getCartItemCount,getCartTotal} from './cart-utils';

export const CartContext = createContext({
    hidden:true,
    tiggleHidden:()=>{},
    cartItems: [],
    addItem:()=>{},
    removeItem:()=>{},
    clearItemsFromCart:()=>{},
    cartItemCount: 0,
    total:0
});

const CartProvider = ({children}) =>{
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems]= useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [total, setTotal] = useState(0);

    const toggleHidden = () =>setHidden(!hidden);
    const addItem = (item) =>setCartItems(addItemtoCart(cartItems, item));
    const removeItem = (item) =>setCartItems(removeItemsfromCart(cartItems, item));
    const clearItemsFromCart = (item) => setCartItems(filterItemsFromCart(cartItems, item));

    useEffect(()=>{
        setCartItemCount(getCartItemCount(cartItems))
        setTotal(getCartTotal(cartItems))
    },[cartItems])

    return(
    <CartContext.Provider value={{
        hidden,toggleHidden,cartItems,addItem,removeItem,clearItemsFromCart,cartItemCount,total
    }}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider;