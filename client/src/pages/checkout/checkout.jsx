import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'

import {selectCartItems, selectCartTotal} from '../../redux/cart/cart-selectors'
import CheckoutItem from '../../Components/Checkout-item/checkout-item';
import STripeCheckoutButton from '../../Components/Stripe-button/stripe-button';

import {CheckoutPageContainer, CheckoutHeaderConatiner, CheckoutHeaderBlock, WarningText, TotalValue} from './checkout.styles'

function CheckoutPage({cartItems, total}){
    return(
    <CheckoutPageContainer>
        <CheckoutHeaderConatiner>
            <CheckoutHeaderBlock>
                <span>Product</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Description</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Quantity</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Price</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Remove</span>
            </CheckoutHeaderBlock>
        </CheckoutHeaderConatiner>
        {
            cartItems.map(item=><CheckoutItem key={item.id} cartItems={item}/>)
        }
        <TotalValue>
            <span>TOTAL: ${total}</span>
        </TotalValue>
        <WarningText>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 - Exp: Any future date- CVV: Any 3 digits
        </WarningText>
        <STripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
    )
}

const mapStateToProps= createStructuredSelector({
    cartItems : selectCartItems,
    total : selectCartTotal
    })

export default connect(mapStateToProps)(CheckoutPage);