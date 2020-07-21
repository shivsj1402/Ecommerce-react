import React, { useContext } from 'react';
import './checkout-item.scss'
import { CartContext } from '../../providers/cart/cart.provider'

function CheckoutItem({cartItems}){
    const {addItem,removeItem,clearItemsFromCart} = useContext(CartContext);
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
            <div className="remove-button" onClick={()=>{clearItemsFromCart(cartItems)}}>&#10005;</div>
        </div>

    )
}

export default CheckoutItem;