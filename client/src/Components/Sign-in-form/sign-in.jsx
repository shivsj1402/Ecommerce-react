import React, {useState} from 'react';
import FormInput from '../Form-input/form-input'
import CustomButton from '../Custom-button/custom-button';
import { connect } from 'react-redux';

import {SignInButton, SignInContainer, SignInTitle} from './sing-in.styles';
import {googleSigninStart,emailSigninStart} from '../../redux/user/user-actions'

const SignIn = ({emailSigninStart, googleSigninStart}) => {
    const [userCredentials,setCredentials] = useState({email:'', password:''})
    
    const {email, password} = userCredentials;
    const handleSubmit = async e =>{
        e.preventDefault();
        emailSigninStart(email, password);
    }

    const handleChange =(e) =>{
        const {value , name } = e.target;
        setCredentials({...userCredentials, [name]:value})
    }

    return(
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="email" label="email" type="email" value={email} handleChange={handleChange} required ></FormInput>
                <FormInput name="password" label="password" type="password" value={password} handleChange={handleChange} required ></FormInput>
                <SignInButton>
                    <CustomButton type="submit">SignIn</CustomButton>
                    <CustomButton type="button" onClick= {googleSigninStart} isGoogleSignIn> SignIn with Google </CustomButton>
                </SignInButton>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps =  dispatch =>({
    googleSigninStart : () => dispatch(googleSigninStart()),
    emailSigninStart:(email,password)=>dispatch(emailSigninStart({email, password}))
})

export default connect(null,mapDispatchToProps)(SignIn);
