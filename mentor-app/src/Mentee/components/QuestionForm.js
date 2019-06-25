import React, { Component } from "react";

export class QuestionForm extends Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder="Industry" type="text" />
          <input placeholder="Question: " type="text" />
          <button>Submit Question</button>
        </form>
      </div>
    );
  }
}

export default QuestionForm;
