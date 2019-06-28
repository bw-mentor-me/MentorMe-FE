import React, { Component } from "react";
import { Route } from "react-router-dom";
import QuestionPage from "./components/QuestionPage";
import QuestionForm from "./components/QuestionForm";
import axios from "axios";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const NavYo = styled.nav`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-around;
  background: #cccccc;
`;

export class MenteeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      activeQuestion: null
    };
  }

  componentDidMount() {
    axios
      .get("https://doc-mentorme.herokuapp.com/questions/questions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(res => {
        this.setState({ data: res.data });
        console.log(res);
        this.props.history.push("/questionsFeed/questionsPage");
      })
      .catch(err => console.log(err));
  }

  postQuestion = item => {
    axios
      .post("https://doc-mentorme.herokuapp.com/questions/question", item, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(res => {
        axios
          .get("https://doc-mentorme.herokuapp.com/questions/questions", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then(res => {
            this.setState({ data: res.data });
            console.log(res);
            this.props.history.push("/questionsFeed/questionsPage");
          })
          .catch(err => console.log(err));
        // this.setState({
        //   data: res.data
        // });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteQuestion = id => {
    axios
      .delete(`https://doc-mentorme.herokuapp.com/questions/question/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })

      .then(res => {
        console.log(res);
        this.setState({ data: res.data });
        this.props.history.push("/questionsFeed/questionsPage");
      })
      .catch(err => console.log(err));
  };

  updateQuestion = (id, updatedInfo) => {
    console.log("redsssssssss");
    axios
      .put(
        `https://doc-mentorme.herokuapp.com/questions/question/${id}`,
        updatedInfo,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      )
      .then(res => {
        this.setState({ data: res.data });
        console.log(res);
        this.props.history.push("/questionsFeed/questionsPage");
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateQuestion = question => {
    this.setState({
      activeQuestion: question
    });
  };

  buttonFunction = e => {
    e.preventDefault();
    this.props.history.push("/questionsFeed/questionsPage");
  };

  buttonFunction2 = e => {
    e.preventDefault();
    this.props.history.push("/questionsFeed/formPage");
  };

  render() {
    return (
      <div>
        <NavYo>
          <Button onClick={this.buttonFunction}>View Questions</Button>
          <Button onClick={this.buttonFunction2}>Ask Question</Button>
        </NavYo>

        <Route
          path="/questionsFeed/questionsPage"
          render={props => (
            <QuestionPage
              {...props}
              data={this.state.data}
              deleteQuestion={this.deleteQuestion}
              updateQuestion={this.updateQuestion}
              setUpdateQuestion={this.setUpdateQuestion}
              activeQuestion={this.state.activeQuestion}
            />
          )}
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
