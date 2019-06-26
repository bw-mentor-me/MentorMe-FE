import React, { Component } from 'react'
import axios from 'axios';

class Signup extends Component {
    state = {
        newUser: {
            username: '',
            password: '',
            phoneNumber: '',
            industryType: '',
            userRole: ''
        }
    }

    handleChanges = e => {
        this.setState({
            newUser : {
                ...this.state.newUser,
                [e.target.name]: e.target.value
            }
        })
    }

    signup = e => {
        e.preventDefault();
        axios
            .post('http://doc-starthere.herokuapp.com/createnewuser', this.state.newUser)
            .then(res => {
                console.log(res);
                return this.props.history.push('/login');
            })
            .catch(err => {
                console.log(err);
                return this.props.history.push('/login');

            })
            
    }   

    mentor = e => {
        e.preventDefault();
        this.setState({
            userRole: 'mentor'
        })
    }    
    
    entrepreneur = e => {
        e.preventDefault();
        this.setState({
            userRole: 'entrepreneur'
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.mentor}>Mentor</button><button onClick={this.entrepreneur}>entrepreneur</button>

                <form onSubmit={this.signup}>
                    <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleChanges} />
                    <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChanges} />
                    <input type='text' name='phoneNumber' placeholder='Cell Phone Number' value={this.state.phoneNumber} onChange={this.handleChanges} />
                    <input type='text' name='industryType' placeholder='Industry' value={this.state.industryType} onChange={this.handleChanges} />        
                    <button type='submit'>sign up</button>
                </form>
            </div>
        )
    }
}


export default Signup;

