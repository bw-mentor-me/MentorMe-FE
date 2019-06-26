import React, { Component } from 'react'
import axios from 'axios';

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    login = e => {

        e.preventDefault();
        axios.post('http://doc-starthere.herokuapp.com/oauth/token', `grant_type=password&username=${this.state.username}&password=${this.state.password}`, {

      headers: {

        // btoa is converting our client id/client secret into base64
        Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
        'Content-Type': 'application/x-www-form-urlencoded'

        }
        })
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.access_token)
            // this.props.history.push('/questions')
        })

        .catch(err => console.log(err))
        this.setState ({
            username: '',
            password: ''
        })
    }

    signup = e => {
        e.preventDefault();
        this.props.history.push('/signup');
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
                <button>Log in</button><button onClick={this.signup} >Sign Up</button>
                
                </form> 
                
            </div>
        )
    }
}

export default Login;