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
<<<<<<< HEAD
      .get("http://http://doc-mentorme.herokuapp.com/questions/questions")
=======
      .get("http://doc-mentorme.herokuapp.com/questions/questions")
>>>>>>> 958337b9e9bc10affc052276997233c489549470
      .then(res => {
        console.log(res);
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  postQuestion = item => {
    axios
      .post("http://doc-mentorme.herokuapp.com/questions/question", item)
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
          <NavLink to="/questionsFeed/questionsPage">View Questions</NavLink>
          <NavLink to="/questionsFeed/formPage">Ask a Question</NavLink>
        </NavYo>

        <Route
          path="/questionsFeed/questionsPage"
          render={props => <QuestionPage {...props} data={this.state.data} />}
        />
        <Route
          path="/questionsFeed/formPage"
          render={props => (
            <QuestionForm {...props} postQuestion={this.postQuestion} />
          )}
        />
      </div>
    );
  }
}

export default MenteeApp;
