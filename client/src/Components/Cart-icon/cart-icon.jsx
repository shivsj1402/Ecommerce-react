import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions' 
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'
import { createStructuredSelector } from 'reselect'

import {CartIconContainer, ShoppingIconComponent, ShoppingItemCount} from './cart-icon.styles'

const CartIcon = ({toggleCartHidden, quantity}) =>{
    return(
        <CartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconComponent/>
    <ShoppingItemCount>{quantity}</ShoppingItemCount>
        </CartIconContainer>
        
    )
}

const mapStateToProps= createStructuredSelector({
    quantity : selectCartItemsCount
    })
  
  
const mapDispatchToProps = dispatch =>({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);