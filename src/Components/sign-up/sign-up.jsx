import React, { useState } from 'react';
import FormInput from '../Form-input/form-input'
import CustomButton from '../Custom-button/custom-button';
import { connect } from 'react-redux';
import {SignupStart} from '../../redux/user/user-actions'
import {SignUpContainer,SignUpTitle} from './sign-up.styles'

const SignUp = ({SignupStart}) =>{
    const [userCredentials, setCredentials] = useState({displayName:'', email:'', password:'', confirmPassword:''})

    const {displayName, email, password, confirmPassword} = userCredentials;
    const handleSubmit = async e =>{
        e.preventDefault();
        if(password!==confirmPassword){
            alert("passwords dont match");
            return;
        }

        SignupStart(displayName, email, password);  
    }

    const handleChange = (e) =>{
        const {value , name} = e.target;
        setCredentials({...userCredentials, [name]:value})
    }
    return(
        <SignUpContainer>
            <SignUpTitle>I don't have an account</SignUpTitle>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput name="displayName" label="Name" type="text" value={displayName} handleChange={handleChange} required></FormInput>
                <FormInput name="email" label="Email" type="email" value={email} handleChange={handleChange} required ></FormInput>
                <FormInput name="password" label="Password" type="password" value={password} handleChange={handleChange} required ></FormInput>
                <FormInput name="confirmPassword" label=" Confirm Password" type="password" value={confirmPassword} handleChange={handleChange} required ></FormInput>
                <div className="buttons">
                    <CustomButton type="submit">SignUp</CustomButton>
                </div>
            </form>
        </SignUpContainer>
    )

}

const mapDispatchToProps= disptach=>({
    SignupStart: (displayName, email, password)=>disptach(SignupStart({displayName, email, password}))
})

export default connect(null, mapDispatchToProps)(SignUp);
