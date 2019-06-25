import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import QuestionPage from "./components/QuestionPage";
import QuestionForm from "./components/QuestionForm";
import axios from "axios";
import styled from "styled-components";

const NavYo = styled.nav`
  padding-top: 10px;
  padding-bottom: 10px;
  border: 1px solid red;
  display: flex;
  justify-content: space-around;
`;

export class MenteeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res);
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  postQuestion = item => {
    axios
      .post("http://localhost:3333/smurfs", item)
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <NavYo>
          <NavLink to="/questions">View Questions</NavLink>
          <NavLink to="/form">Ask a Question</NavLink>
        </NavYo>
        <Route
          path="/questions"
          render={props => <QuestionPage {...props} data={this.state.data} />}
        />
        <Route
          path="/form"
          render={props => (
            <QuestionForm {...props} postQuestion={this.postQuestion} />
          )}
        />
      </div>
    );
  }
}

export default MenteeApp;
