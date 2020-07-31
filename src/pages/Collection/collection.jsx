import React from 'react';
import {default as CollectionItem} from '../../Components/collection-items/collection-items.container'
import './collection.scss'

function CollectionPage({collections}){
    const {title, items} = collections;
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