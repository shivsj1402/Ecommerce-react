import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom'

import './cart-dropdown.scss'
import CustomButton from '../Custom-button/custom-button';
import CartItem from '../Cart-tem/cart-item';
import { CartContext } from '../../providers/cart/cart.provider'

function CartDropdown ({history}) {
    const {cartItems, toggleHidden} = useContext(CartContext)
        return(
            <div className="cart-dropdown">
                <div className="cart-items">
                {cartItems.length
                ? cartItems.map(item =><CartItem key={item.id} item={item}/> )
                : (<span className="empty-message">No items in Cart</span>)
                }
                </div>
                <CustomButton onClick={()=>{history.push('/checkout'); toggleHidden()}}>GO TO CHECKOUT</CustomButton>
            </div>
           
        )
}

export default withRouter(CartDropdown);