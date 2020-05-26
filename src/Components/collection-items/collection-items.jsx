import React from 'react';
import '../Collection-items/collection-items.scss';
import CustomButton from '../Custom-button/custom-button';
import { connect } from 'react-redux';
import { addCartItems } from '../../redux/cart/cart-actions' 

function CollectionItem({item, addCartItems}) {
  return (
      <div className="collection-item">
          <div 
          className='image'
          style = {{ backgroundImage: `url(${item.imageUrl})`}}
            />
            <div className="collection-footer">
                <span className = "name">{item.name}</span>
                <span className = "price">{item.price}</span>
            </div>
            <CustomButton inverted onClick={()=>{addCartItems(item)}}>ADD TO CART</CustomButton>
      </div>
    
  );
}

const mapDispatchToProps = dispatch =>({
  addCartItems : (item) => dispatch(addCartItems(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);