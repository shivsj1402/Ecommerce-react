import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import MenuItem from '../menu-items/menu-item';
import {selectDirectorySections} from '../../redux/directory/directory-selector'

import {DirectoryMenuContainer} from './directory-menu.styles'

function Directory({section}){
  return(
  <DirectoryMenuContainer>
      {section.map(
          (item) =>(
          <MenuItem 
              key={item.id} 
              title={item.title} 
              imageUrl={item.imageUrl}
              size={item.size}
              linkUrl={item.linkUrl}
              />
          )
      )}
  </DirectoryMenuContainer>)
  }

const mapStateToProps = createStructuredSelector({
  section : selectDirectorySections
})

export default connect(mapStateToProps)(Directory);