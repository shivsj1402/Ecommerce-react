import React from 'react';
import { connect } from 'react-redux';
import { addCartItems } from '../../redux/cart/cart-actions' 

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-items.styles';

function CollectionItem({item, addCartItems}) {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addCartItems(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
}

const mapDispatchToProps = dispatch =>({
  addCartItems : (item) => dispatch(addCartItems(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);