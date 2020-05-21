import React from 'react';
import '../Custom-button/custom-button.scss';

const ButtonInput = ({children, ...otherProps}) => {
  return (
      <button className="custom-button" {...otherProps}>
        {children}
      </button>
    
  );
}

export default ButtonInput;