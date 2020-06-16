import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../Preview-collection/preview-collection';
import {selectCollectionsForPreview}  from '../../redux/shop/shop-selector';

import {CollectionsOverviewContainer} from './collections-overview.styles'

function CollectionsOverview({collections}){
    return(
    <CollectionsOverviewContainer>
        {
            collections.map(({id, ...otherCollectionProps}) =>(
                <CollectionPreview key= {id} {...otherCollectionProps}/>
            ))
        }

    </CollectionsOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview 
 })

export default connect(mapStateToProps)(CollectionsOverview);