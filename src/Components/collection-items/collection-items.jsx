import React,{ useContext } from 'react';
import '../collection-items/collection-items.scss';
import CustomButton from '../Custom-button/custom-button';
import {CartContext} from '../../providers/cart/cart.provider'

function CollectionItem({item}) {
  const {addItem} = useContext(CartContext);
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
            <CustomButton inverted onClick={()=>{addItem(item)}}>ADD TO CART</CustomButton>
      </div>
    
  );
}

export default CollectionItem;