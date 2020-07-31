import React from 'react';
import { Route } from 'react-router-dom'
import { default as CollectionsOverview} from '../../Components/Collection-overview/collections-overview.container'
import { default as CollectionPage} from '../Collection/collection.container';

function ShopPage ({match}){
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    );
}


export default ShopPage;