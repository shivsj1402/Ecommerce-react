import React from 'react';
import { ReactComponent as ShoppingIcon}  from '../../assets/cart-icon.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions' 

import './cart-icon.scss'

const CartIcon = ({toggleCartHidden}) =>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
        
    )
}

// const mapStateToProps= state =>({
//     hidden : state.user.currentUser
//     })
  
  
const mapDispatchToProps = dispatch =>({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);