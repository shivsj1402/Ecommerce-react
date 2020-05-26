import React from 'react';
import {connect} from 'react-redux';

import './cart-dropdown.scss'
import CustomButton from '../Custom-button/custom-button';
import CartItem from '../Cart-tem/cart-item';
import { selectCartItems } from '../../redux/cart/cart-selectors'

function CartDropdown ({cartItems}) {
        return(
            <div className="cart-dropdown">
                <div className="cart-items">
                {console.log(cartItems)}
                {cartItems.map(item =><CartItem key={item.id} item={item}/> )}
                </div>
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
           
        )
}

const mapStateToProps= state =>({
    cartItems : selectCartItems(state)
    })

export default connect(mapStateToProps)(CartDropdown);