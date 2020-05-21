import React from 'react';
import './sign-in.scss'
import FormInput from '../Form-input/form-input'
import ButtonInput from '../Custom-button/custom-button';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        this.setState({ email:'', password:''})
    }

    handleChange =(e) =>{
        const {value , name } = e.target;
        this.setState({[name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" label="email" type="email" value={this.state.email} handleChange={this.handleChange} required></FormInput>
                    <FormInput name="password" label="password" type="password" value={this.state.password} handleChange={this.handleChange} required></FormInput>
                    <ButtonInput type="submit">SignIn</ButtonInput>
                </form>
            </div>
        )
    }
}

export default SignIn;
