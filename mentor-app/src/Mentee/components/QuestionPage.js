import React, { Component } from "react";
import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";

export class QuestionPage extends Component {
  state = {
    data: this.props.data,
    filteredPosts: []
  };

  searchFilter = e => {
    const filtered = this.state.data.filter(post =>
      post.name.toLowerCase().includes(e.target.value.toLowerCase())
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
        />
      </div>
    );
  }
}

export default QuestionPage;
