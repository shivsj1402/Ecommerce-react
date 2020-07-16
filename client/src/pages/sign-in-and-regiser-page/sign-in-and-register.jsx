import React from 'react';
import {SignInAndRegisterContainer} from './sign-in-and-register.styles';
import SignIn from '../../Components/Sign-in-form/sign-in';
import SignUp from '../../Components/sign-up/sign-up';

function SigninAndRegisterPage() {
  return (
      <SignInAndRegisterContainer>
        <SignIn />
        <SignUp />
      </SignInAndRegisterContainer>
    
  );
}

export default SigninAndRegisterPage;