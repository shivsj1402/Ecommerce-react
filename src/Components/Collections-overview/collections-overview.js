import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections-overview.scss'
import CollectionPreview from '../Preview-collection/preview-collection';
import {selectShopCollection}  from '../../redux/shop/shop-selector'

function CollectionsOverview({collections}){
    return(
    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollectionProps}) =>(
                <CollectionPreview key= {id} {...otherCollectionProps}/>
            ))
        }

    </div>
    )
}

const mapStateToProps =createStructuredSelector({
    collections: selectShopCollection 
 })

export default connect(mapStateToProps)(CollectionsOverview);