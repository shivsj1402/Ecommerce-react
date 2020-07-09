import React from 'react';
import FormInput from '../Form-input/form-input'
import CustomButton from '../Custom-button/custom-button';
//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import {SignupStart} from '../../redux/user/user-actions'
import {SignUpContainer,SignUpTitle} from './sign-up.styles'

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e =>{
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        const {SignupStart} = this.props;
        if(password!==confirmPassword){
            alert("passwords dont match");
            return;
        }

        SignupStart(displayName, email, password);  
    }

    handleChange = (e) =>{
        const {value , name } = e.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <SignUpContainer>
                <SignUpTitle>I don't have an account</SignUpTitle>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" label="Name" type="text" value={this.state.displayName} handleChange={this.handleChange} required></FormInput>
                    <FormInput name="email" label="Email" type="email" value={this.state.email} handleChange={this.handleChange} required ></FormInput>
                    <FormInput name="password" label="Password" type="password" value={this.state.password} handleChange={this.handleChange} required ></FormInput>
                    <FormInput name="confirmPassword" label=" Confirm Password" type="password" value={this.state.confirmPassword} handleChange={this.handleChange} required ></FormInput>
                    <div className="buttons">
                        <CustomButton type="submit">SignUp</CustomButton>
                    </div>
                </form>
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps= disptach=>({
    SignupStart: (displayName, email, password)=>disptach(SignupStart({displayName, email, password}))
})

export default connect(null, mapDispatchToProps)(SignUp);
