import React, { useContext } from 'react';

import CollectionItem from '../../Components/collection-items/collection-items'
import CollectionContext from '../../contexts/collections/collections.context'
import './collection.scss'

function CollectionPage({match}){
    const collections = useContext(CollectionContext);
    const collection = collections[match.params.collectionId]
    const {title, items} = collection;
    return(
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
        {
            items.map(item =>(
                <CollectionItem key= {item.id} item={item}/>
            ))
        }
        </div>
    </div>
        )
}

export default CollectionPage;