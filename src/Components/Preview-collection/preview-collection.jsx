import React from 'react';
import './preview-collection.scss';
import CollectionItem from '../collection-items/collection-items'

function CollectionPreview({title, items}) {
  return (
    <div className="collection-preview">
        <h1 className="title"> {title.toUpperCase()}</h1>
        <div className="preview">
        {
            items
            .filter((itmem,idx)=>idx < 4 )
            .map(({id, ...otherItemProps})=>(
                <CollectionItem key={id} {...otherItemProps} />
            ))
        }
        </div>
    </div>
  );
}

export default CollectionPreview;