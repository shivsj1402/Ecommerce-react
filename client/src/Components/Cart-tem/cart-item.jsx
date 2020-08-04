import React from 'react';

import {CartItemContainer, CartItemImage, CartItemDetails} from './cart-item.styles'

function CartItem ({item : {imageUrl, price,name,quantity}}) {
    return(
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt="cart_item" />
            <CartItemDetails>
                <span className="name">{name}</span>
                <span className="price">{quantity} X ${price}</span>
            </CartItemDetails>
        </CartItemContainer>
    )
}

export default React.memo(CartItem);