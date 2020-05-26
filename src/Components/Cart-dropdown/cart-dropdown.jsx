import React from 'react';

import './cart-dropdown.scss'
import CustomButton from '../Custom-button/custom-button';

function CartDropdown () {
        return(
            <div className="cart-dropdown">
                <div className="cart-items"></div>
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
           
        )
}

export default CartDropdown;