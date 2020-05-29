import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import './directory-menu.scss';
import MenuItem from '../Menu-items/menu-item';
import {selectDirectorySections} from '../../redux/directory/directory-selector'

function Directory ({section}){
  return(
  <div className='directory-menu'>
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
  </div>)
  }

const mapStateToProps = createStructuredSelector({
  section : selectDirectorySections
})

export default connect(mapStateToProps)(Directory);