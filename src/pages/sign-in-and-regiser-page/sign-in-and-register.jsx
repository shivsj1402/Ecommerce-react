import React from 'react';
import './sign-in-and-register.scss';
import SignIn from '../../Components/Sign-in-form/sign-in';
import SignUp from '../../Components/sign-up/sign-up';

function SigninAndRegisterPage() {
  return (
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    
  );
}

export default SigninAndRegisterPage;