import React from 'react';
import { ReactComponent as ShoppingIcon}  from '../../assets/cart-icon.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions' 
import { selectCartItemsCount } from '../../redux/cart/cart-selectors'

import './cart-icon.scss'

const CartIcon = ({toggleCartHidden, quantity}) =>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{quantity}</span>
        </div>
        
    )
}

const mapStateToProps= state =>({
    quantity : selectCartItemsCount(state)
    })
  
  
const mapDispatchToProps = dispatch =>({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);