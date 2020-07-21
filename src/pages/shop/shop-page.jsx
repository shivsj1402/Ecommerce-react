import React from 'react';
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../Components/Collection-overview/collections-overview'
import CollectionPage from '../Collection/collection';

function ShopPage ({match}){
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    );
}


export default ShopPage;