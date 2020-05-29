import React from 'react';
import CollectionsOverview from '../../Components/Collections-overview/collections-overview';

function ShopPage ({collections}){
    return(
        <div className="shop-page">
            <h1>Shop Page</h1>
            <CollectionsOverview />
        </div>
    );
}

export default ShopPage;