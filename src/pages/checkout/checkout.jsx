import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors'
import './checkout.scss'
import CheckoutItem from '../../Components/Checkout-item/checkout-item';
import STripeCheckoutButton from '../../Components/Stripe-button/stripe-button';

function CheckoutPage({cartItems, total}){
    return(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(item=><CheckoutItem key={item.id} cartItems={item}/>)
        }
        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
        <div className="text-warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: Any future date- CVV: Any 3 digits
        </div>
        <STripeCheckoutButton price={total}/>
    </div>
    )
}

const mapStateToProps= createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
    })

export default connect(mapStateToProps)(CheckoutPage);