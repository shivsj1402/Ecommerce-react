import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import NavBar from  './navbar';

const GET_CART_TOGGLE_VALUE= gql`
    {
        cartHidden @client
    }
`

const NavBarContainer = () =>(
    <Query query={GET_CART_TOGGLE_VALUE} >
        {({data: {cartHidden}}) =>{
            return <NavBar hidden={cartHidden} />;
        }}
    </Query>
);

export default NavBarContainer;