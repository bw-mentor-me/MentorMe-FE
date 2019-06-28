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

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  login = e => {
    e.preventDefault();
    axios
      .post(
        "https://doc-mentorme.herokuapp.com/oauth/token",
        `grant_type=password&username=${this.state.username}&password=${
          this.state.password
        }`,
        {
          headers: {
            // btoa is converting our client id/client secret into base64
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.access_token);
        axios
          .get("https://doc-mentorme.herokuapp.com/users/getusername", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(res => {
            console.log(res);
            localStorage.setItem("userid", res.data.userid);
          })
          .catch(err => console.log(err));
        this.props.history.push("/questionsFeed");
      })

      .catch(err => {
        console.log(err);
        this.props.history.push("/questionsFeed");
      });
    this.setState({
      username: "",
      password: ""
    });
  };

  signup = e => {
    e.preventDefault();
    this.props.history.push("/signup");
  };

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Mentor-Me</h1>
        <h2>Log In</h2>
        <LogInForm onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={this.handleChanges}
            value={this.state.username}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleChanges}
            value={this.state.password}
          />
          <ButtonDiv>
            <button>Log in</button>
            <button onClick={this.signup}>Sign Up</button>
          </ButtonDiv>
        </LogInForm>
      </div>
    );
  }
}

export default Login;
