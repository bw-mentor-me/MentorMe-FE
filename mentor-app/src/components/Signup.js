import React, { Component } from 'react'
import axios from 'axios';

class Signup extends Component {
    state = {
        newUser: {
            username: '',
            password: '',
            phonenumber: '',
            industrytype: '',
            usertype: 'entrepreneur'
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
        console.log(this.state.newUser);
        axios
            .post('http://doc-mentorme.herokuapp.com/users/user', this.state.newUser)
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
            newUser: {
                ...this.state.newUser,
                usertype: 'mentor'

            }
        })
        console.log(this.state)
    }    
    
    entrepreneur = e => {
        e.preventDefault();
        this.setState({
            newUser: {
                ...this.state.newUser,
                usertype: 'entrepreneur'

            }
        })
        console.log(this.state)

    }

    render() {
        return (
            <div>
                <button onClick={this.mentor}>Mentor</button><button onClick={this.entrepreneur}>entrepreneur</button>

                <form onSubmit={this.signup}>
                    <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleChanges} required />
                    <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChanges} required  />
                    <input type='text' name='phonenumber' placeholder='Cell Phone Number' value={this.state.phoneNumber} onChange={this.handleChanges} required  />
                    <input type='text' name='industrytype' placeholder='Industry' value={this.state.industryType} onChange={this.handleChanges} required  />        
                    <button type='submit'>sign up</button>
                </form>
            </div>
        )
    }
}


export default Signup;

