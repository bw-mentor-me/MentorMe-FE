import React, { Component } from "react";
import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";

export class QuestionPage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CardContainer data={this.props.data} />
      </div>
    );
  }
}

export default QuestionPage;
