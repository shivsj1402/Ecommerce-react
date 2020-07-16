import React from 'react';

import {FormInputContainer, FormInputLabel, InputGroup} from './form-input.styles'

const FormInput = ({handleChange, label,...otherProps}) => {
  return (
      <InputGroup>
          <FormInputContainer onChange={handleChange} {...otherProps}/>
            {
                label ?
                (<FormInputLabel className={otherProps.value.length ? 'shrink' : ''}>
                    {label}
                </FormInputLabel>)
                : null
            }
      </InputGroup>
    
  );
}

export default FormInput;