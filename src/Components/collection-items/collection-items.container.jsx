import React from 'react';
import { Mutation } from 'react-apollo';
import {gql} from 'apollo-boost';

import CollectionItem from './collection-items';

const ADD_ITEMS_TO_CART= gql`
    mutation AddItemToCart($item:Item){
        addItemToCart(item: $item) @client
    }
`

const CollectionItemContainer = (props) =>(
    <Mutation mutation={ADD_ITEMS_TO_CART} >
        {addItemToCart =><CollectionItem {...props} addItem ={item => addItemToCart({ variables: {item}})} /> }
    </Mutation>
);

export default CollectionItemContainer;