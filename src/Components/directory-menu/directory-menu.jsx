import React,{useContext} from 'react';
import './directory-menu.scss';
import MenuItem from '../menu-items/menu-item';
import DirectoryContext from '../../contexts/directory/directory.context'

function Directory(){
  const {sections} = useContext(DirectoryContext);
  return(
  <div className='directory-menu'>
      {sections.map(
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

export default Directory;