import React from 'react';
import { connect } from 'react-redux';
import {clearCartItem, addCartItems, removeCartItems} from '../../redux/cart/cart-actions';

import {CheckoutItemContainer, CheckoutImageContainer,TextContainer,QuantityContainer,RemoveButton} from './checkout-items.styles'

function CheckoutItem({cartItems, clearItem, addItem, removeItem}){
    const {name, imageUrl, price, quantity} = cartItems;
    return(
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <img src={imageUrl} alt="item" />
            </CheckoutImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div className="arrow" onClick={()=>{removeItem(cartItems)}}>&#10094;</div>
                <span className="value">{quantity}</span> 
                <div className="arrow"onClick={()=>{addItem(cartItems)}}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButton onClick={()=>{clearItem(cartItems)}}>&#10005;</RemoveButton>
        </CheckoutItemContainer>

    )
}

const mapDispatchToProps= dispatch =>({
    clearItem : item => dispatch(clearCartItem(item)),
    addItem : item =>dispatch(addCartItems(item)),
    removeItem: item =>dispatch(removeCartItems(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);