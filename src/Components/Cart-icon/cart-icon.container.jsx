import React from 'react';
import { graphql} from 'react-apollo';
import { flowRight } from 'lodash';
import {gql} from 'apollo-boost';

import CartIcon from  './cart-icon';

const GET_CART_TOGGLE_VALUE= gql`
    mutation ToggleCartHidden{
        toggleCartHidden @client
    }
`

const GET_CART_ITEM_COUNT = gql`
    {
        itemCount @client
    }
`

const CartIconContainer = ({ data : {itemCount}, toggleCartHidden}) =>(
        <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} /> 
    );

export default flowRight(
    graphql(GET_CART_ITEM_COUNT),
    graphql(GET_CART_TOGGLE_VALUE, {name : 'toggleCartHidden'})
)(CartIconContainer);