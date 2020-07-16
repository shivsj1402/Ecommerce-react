import React from 'react';
import CollectionItem from '../collection-items/collection-items'

import {CollectionPreviewContainer, CollectionPreviewTitle, CollectionPreviewItem} from './preview-collection.styles'

function CollectionPreview({title, items}) {
  return (
    <CollectionPreviewContainer>
        <CollectionPreviewTitle> {title.toUpperCase()}</CollectionPreviewTitle>
        <CollectionPreviewItem>
        {
            items
            .filter((item,idx)=>idx < 4 )
            .map((item)=>(
                <CollectionItem key={item.id} item={item} />
            ))
        }
        </CollectionPreviewItem>
    </CollectionPreviewContainer>
  );
}

export default CollectionPreview;