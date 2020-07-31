import React from 'react';
import './collections-overview.scss'
import CollectionPreview from '../Preview-collection/preview-collection';

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


export default CollectionsOverview;