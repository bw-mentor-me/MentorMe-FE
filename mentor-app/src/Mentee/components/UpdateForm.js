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

export class UpdateForm extends Component {
  state = {
    question: ""
  };

  render() {
    return (
      <div>
        <Form>
          <QuestionText
            placeholder="Question: "
            type="text"
            value={this.state.question}
            name="question"
            onChange={this.handleChange}
          />

          <Button
            onClick={() =>
              this.props.updateQuestion(
                this.props.activeQuestion.questionsid,
                this.state
              )
            }
            size="small"
            color="primary"
          >
            Update Question
          </Button>
        </Form>
      </div>
    );
  }
}

export default UpdateForm;
