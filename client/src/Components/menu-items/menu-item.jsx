import React from 'react';
import { withRouter} from 'react-router-dom';

import {MenuItemContainer, MenuBackground,ContentContainer, ContentTitle, ContentSubTitle} from './menu-items.styles'

function MenuItem({ title, imageUrl, size, history, linkUrl, match }) {
  return (
    <MenuItemContainer size={size} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <MenuBackground style={{ backgroundImage: `url(${imageUrl})`}}/>
        <ContentContainer>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubTitle>SHOP NOW</ContentSubTitle>
        </ContentContainer>
    </MenuItemContainer>
  );
}

export default withRouter(MenuItem);