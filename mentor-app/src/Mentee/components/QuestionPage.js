import React, { Component } from "react";
import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";
import UpdateForm from "./UpdateForm";

export class QuestionPage extends Component {
  state = {
    filteredPosts: []
  };

  searchFilter = e => {
    const filtered = this.props.data.filter(post =>
      post.question.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ filteredPosts: filtered });
  };

  render() {
    return (
      <div>
        <SearchBar searchFilter={this.searchFilter} />
        <CardContainer
          data={this.props.data}
          searchFilter={this.searchFilter}
          filteredPosts={this.state.filteredPosts}
          deleteQuestion={this.props.deleteQuestion}
          updateQuestion={this.props.updateQuestion}
          setUpdateQuestion={this.props.setUpdateQuestion}
          history={this.props.history}
        />
        <UpdateForm
          setUpdateQuestion={this.props.setUpdateQuestion}
          activeQuestion={this.props.activeQuestion}
        />
      </div>
    );
  }
}

export default QuestionPage;
