import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Signup from './Signup';

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    login = e => {

        e.preventDefault();
        axios.post('http://localhost:8443/oauth/token', `grant_type=password&username=${this.state.username}&password=${this.state.password}`, {

      headers: {

        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'

        }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Log In</h1>
                <form onSubmit={this.login}>
                
                <input type='text' name='username' placeholder='username' onChange={this.handleChanges} value={this.state.username} />
                <input type='password' name='password' placeholder='password' onChange={this.handleChanges} value={this.state.password} />
                <button>Log in</button><Link to='/signup' >Sign Up</Link>
                
                </form> 
                
            </div>
        )
    }
}
