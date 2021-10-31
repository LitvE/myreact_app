import React, { Component } from 'react'

export default class SimpleForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            userEmail: '',
            userPassword: '',
        }
    }

    setEmail = ({target: {value}}) =>{
        this.setState({userEmail: value});
    }

    setPassword = ({target: {value}}) =>{
        this.setState({userPassword: value});
    }

    handleSubmit = e =>{
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="email" name='userEmail' value={this.state.userEmail} onChange={this.setEmail} placeholder='email'></input>
                <input type="password" name='userPassword' value={this.state.userPassword} onChange={this.setPassword} placeholder='password'></input>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}
