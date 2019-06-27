import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const LogInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin: 10px 0px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  margin-top: 5px;

  button {
    margin: 0px 10px;
  }
`;

const SignUpButton = styled.button`
  font-size: 1.3rem;
  margin-top: 15px;
  border-radius: 8px;
  background: white;
  color: #333333;
`;

class Signup extends Component {
  state = {
    newUser: {
      username: "",
      password: "",
      phonenumber: "",
      industrytype: "",
      usertype: ""
    }
  };

  handleChanges = e => {
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    });
  };

  signup = e => {
    e.preventDefault();
    axios
      .post(
        "http://doc-starthere.herokuapp.com/createnewuser",
        this.state.newUser
      )
      .then(res => {
        console.log(res);
        return this.props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
        return this.props.history.push("/login");
      });
  };

  mentor = e => {
    e.preventDefault();
    this.setState({
      newUser: {
        ...this.state.newUser,
        usertype: "mentor"
      }
    });
  };

  entrepreneur = e => {
    e.preventDefault();
    this.setState({
      newUser: {
        ...this.state.newUser,
        usertype: "entrepreneur"
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Mentor-Me</h1>
        <h2>Sign Up</h2>
        <LogInForm onSubmit={this.signup}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleChanges}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="phonenumber"
            placeholder="Cell Phone Number"
            value={this.state.phoneNumber}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="industrytype"
            placeholder="Industry"
            value={this.state.industryType}
            onChange={this.handleChanges}
          />
          <ButtonDiv>
            <button onClick={this.mentor}>Mentor</button>
            <button onClick={this.entrepreneur}>Entrepreneur</button>
          </ButtonDiv>
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </LogInForm>
      </div>
    );
  }
}

export default Signup;
