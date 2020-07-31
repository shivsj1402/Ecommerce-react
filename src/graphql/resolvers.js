import {gql} from 'apollo-boost';
import {addItemtoCart, getCartItemCount} from './cart-utils';

export const typeDefs = gql`
    extend type Item{
        quantity: Int
    }

    extend type Mutation {
        ToggleCartHidden: Boolean!
        AddItemToCart(item: Item!): [Item]!
    }
`;

const GET_CART_TOGGLE_VALUE= gql`
    {
        cartHidden @client
    }
`
const GET_CART_ITEM_COUNT = gql`
    {
        itemCount @client
    }
`


const GET_CART_ITEMS= gql`
    {
        cartItems @client
    }
`


export const resolvers = {
    Mutation:{
        toggleCartHidden: (_root, _args, { cache }) =>{
            const { cartHidden } = cache.readQuery({
                query : GET_CART_TOGGLE_VALUE
            });

            cache.writeQuery({
                query: GET_CART_TOGGLE_VALUE,
                data : { cartHidden : !cartHidden}
            });

            return !cartHidden;
        },

        addItemToCart: (_root, { item }, { cache })=>{
            const { cartItems } = cache.readQuery({
                query : GET_CART_ITEMS
            });

            const newCartItems = addItemtoCart(cartItems, item);

            cache.writeQuery({
                query: GET_CART_ITEM_COUNT,
                data : { itemCount : getCartItemCount(newCartItems)}
            });

            cache.writeQuery({
                query: GET_CART_ITEMS,
                data : { cartItems: newCartItems}
            });

            return newCartItems;
        }
    }
}