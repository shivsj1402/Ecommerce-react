import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import CartItem from '../Cart-tem/cart-item';
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { toggleCartHidden } from '../../redux/cart/cart-actions' 

import {CartDropdownContainer, CartItemsContainer, CheckoutButton, EmptyCartMessage} from './cart-dropdown.styles'

function CartDropdown ({cartItems , history, toggleCartHidden}) {
        return(
            <CartDropdownContainer>
                <CartItemsContainer>
                {cartItems.length
                ? cartItems.map(item =><CartItem key={item.id} item={item}/> )
                : (<EmptyCartMessage>No items in Cart</EmptyCartMessage>)
                }
                </CartItemsContainer>
                <CheckoutButton onClick={()=>{history.push('/checkout'); toggleCartHidden()}}>GO TO CHECKOUT</CheckoutButton>
            </CartDropdownContainer>
           
        )
}

const mapStateToProps= createStructuredSelector({
    cartItems : selectCartItems
    })

const mapDispatchToProps = dispatch =>({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));