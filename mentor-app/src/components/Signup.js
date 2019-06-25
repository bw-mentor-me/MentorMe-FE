import React, { Component } from 'react'

export default class Signup extends Component {
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
        // console.log(this.state)
    }
    // mentor = e => {
    //     e.preventDefault();
    //     this.setState({
    //         userRole: 'mentor'
    //     })
    // }    
    
    // student = e => {
    //     e.preventDefault();
    //     this.setState({
    //         userRole: 'mentee'
    //     })
    // }

    render() {
        return (
            <div>
                {/* <button onClick={this.mentor}>Mentor</button><button onClick={this.student}>Student</button> */}

                <form>
                    <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleChanges} />
                    <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChanges} />
                    <input type='text' name='phoneNumber' placeholder='Cell Phone Number' value={this.state.phoneNumber} onChange={this.handleChanges} />
                    <input type='text' name='industryType' placeholder='Industry' value={this.state.industryType} onChange={this.handleChanges} />
                   
                </form>
            </div>
        )
    }
}
