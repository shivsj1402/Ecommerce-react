import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import './cart-dropdown.scss'
import CustomButton from '../Custom-button/custom-button';
import CartItem from '../Cart-tem/cart-item';
import { selectCartItems } from '../../redux/cart/cart-selectors'
import { toggleCartHidden } from '../../redux/cart/cart-actions' 

function CartDropdown ({cartItems , history, toggleCartHidden}) {
        return(
            <div className="cart-dropdown">
                <div className="cart-items">
                {cartItems.length
                ? cartItems.map(item =><CartItem key={item.id} item={item}/> )
                : (<span className="empty-message">No items in Cart</span>)
                }
                </div>
                <CustomButton onClick={()=>{history.push('/checkout'); toggleCartHidden()}}>GO TO CHECKOUT</CustomButton>
            </div>
           
        )
}

const mapStateToProps= createStructuredSelector({
    cartItems : selectCartItems
    })

const mapDispatchToProps = dispatch =>({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown));