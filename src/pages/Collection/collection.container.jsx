import React from 'react';
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import CollectionPage from  './collection';
import Spinner from '../../Components/spinner/spinner';

const GET_COLLECTION_BY_TITLE = gql`
query getCollectionsByTitle($title:String!){
    getCollectionsByTitle (title :$title){
        id
        title
        items{
            id
            name
            price
            imageUrl
        }
    }
}
`;

const CollectionsPageContainer = ({match}) =>(
    <Query query={GET_COLLECTION_BY_TITLE} variables={{title:match.params.collectionId}}>
        {({loading, data}) =>{
            if(loading) return <Spinner />;
            return <CollectionPage collections={data.getCollectionsByTitle} />;
        }}
    </Query>
);

export default CollectionsPageContainer;