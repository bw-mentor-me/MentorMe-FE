import React, { Component } from "react";
import styled from "styled-components";

import Button from "@material-ui/core/Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// const Industry = styled.input`
//   margin-bottom: 20px;
//   margin-top: 20px;
//   padding-right: 40px;
// `;
const QuestionText = styled.input`
  margin-bottom: 10px;
  padding-bottom: 50px;
  margin-top: 20px;
  padding-right: 40px;
`;

export class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      userid: localStorage.getItem("userid")
    };
  }

  addQuestion = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.postQuestion(this.state);
    this.setState({
      question: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addQuestion}>
          {/* <Industry
            placeholder="Industry"
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleChange}
          /> */}
          <QuestionText
            placeholder="Question: "
            type="text"
            value={this.state.question}
            name="question"
            onChange={this.handleChange}
          />

          <Button onClick={this.addQuestion} size="small" color="primary">
            Submit Question
          </Button>
        </Form>
      </div>
    );
  }
}

export default QuestionForm;
