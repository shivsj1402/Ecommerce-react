import React from 'react';
import { Query, Mutation } from 'react-apollo';
import {gql} from 'apollo-boost';

import CartDropdown from  './cart-dropdown';

const GET_CART_TOGGLE_VALUE= gql`
    mutation ToggleCartHidden{
        toggleCartHidden @client
    }
`
const GET_CART_ITEMS= gql`
    {
        cartItems @client
    }
`

const CartDropdownContainer = () =>(
    <Mutation mutation={GET_CART_TOGGLE_VALUE} >
        {toggleCartHidden =>
            <Query query = {GET_CART_ITEMS}>
            {({data: {cartItems}}) =>(
                <CartDropdown toggleCartHidden={toggleCartHidden} cartItems={cartItems}/>
            )}
            </Query>
        }
    </Mutation>
);

export default CartDropdownContainer;