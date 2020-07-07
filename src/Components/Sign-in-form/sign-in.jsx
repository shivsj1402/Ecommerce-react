import React from 'react';
import FormInput from '../Form-input/form-input'
import CustomButton from '../Custom-button/custom-button';
import { connect } from 'react-redux';

import {SignInButton, SignInContainer, SignInTitle} from './sing-in.styles';
import {googleSigninStart,emailSigninStart} from '../../redux/user/user-actions'

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
        const {emailSigninStart} = this.props;
        const {email, password} = this.state;
        
        emailSigninStart(email, password);
    }

    handleChange =(e) =>{
        const {value , name } = e.target;
        this.setState({[name]:value})
    }

    render(){
        const {googleSigninStart} = this.props;
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="email" type="email" value={this.state.email} handleChange={this.handleChange} required ></FormInput>
                    <FormInput name="password" label="password" type="password" value={this.state.password} handleChange={this.handleChange} required ></FormInput>
                    <SignInButton>
                        <CustomButton type="submit">SignIn</CustomButton>
                        <CustomButton type="button" onClick= {googleSigninStart} isGoogleSignIn> SignIn with Google </CustomButton>
                    </SignInButton>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps =  dispatch =>({
    googleSigninStart : () => dispatch(googleSigninStart()),
    emailSigninStart:(email,password)=>dispatch(emailSigninStart({email, password}))
})

export default connect(null,mapDispatchToProps)(SignIn);
