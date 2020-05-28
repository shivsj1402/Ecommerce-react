import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.scss'
import {clearCartItem, addCartItems, removeCartItems} from '../../redux/cart/cart-actions'

function CheckoutItem({cartItems, clearItem, addItem, removeItem}){
    const {name, imageUrl, price, quantity} = cartItems;
    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>{removeItem(cartItems)}}>&#10094;</div>
                <span className="value">{quantity}</span> 
                <div className="arrow"onClick={()=>{addItem(cartItems)}}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>{clearItem(cartItems)}}>&#10005;</div>
        </div>

    )
}

const mapDispatchToProps= dispatch =>({
    clearItem : item => dispatch(clearCartItem(item)),
    addItem : item =>dispatch(addCartItems(item)),
    removeItem: item =>dispatch(removeCartItems(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);