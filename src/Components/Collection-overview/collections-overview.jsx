import React, {useContext} from 'react';
import './collections-overview.scss'
import CollectionPreview from '../Preview-collection/preview-collection';

import CollectionContext from '../../contexts/collections/collections.context'

function CollectionsOverview(){;
    const collections = useContext(CollectionContext);
    const collectionArr = Object.keys(collections).map(keys=>collections[keys]);
    return(
    <div className="collections-overview">
        {
            collectionArr.map(({id, ...otherCollectionProps}) =>(
                <CollectionPreview key= {id} {...otherCollectionProps}/>
            ))
        }

    </div>
    )
}

export default CollectionsOverview;