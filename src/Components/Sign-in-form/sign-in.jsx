import React from 'react';
import FormInput from '../Form-input/form-input'
import CustomButton from '../Custom-button/custom-button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import {SignInButton, SignInContainer, SignInTitle} from './sing-in.styles';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e =>{
        e.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password:''});
        }catch(err){
            console.log(err)
        }

        
    }

    handleChange =(e) =>{
        const {value , name } = e.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="email" type="email" value={this.state.email} handleChange={this.handleChange} required ></FormInput>
                    <FormInput name="password" label="password" type="password" value={this.state.password} handleChange={this.handleChange} required ></FormInput>
                    <SignInButton>
                        <CustomButton type="submit">SignIn</CustomButton>
                        <CustomButton  onClick= {signInWithGoogle} isGoogleSignIn> SignIn with Google </CustomButton>
                    </SignInButton>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;
