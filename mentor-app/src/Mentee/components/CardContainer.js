import React, { Component } from "react";
import ImgMediaCard from "./ImgMediaCard";

export class CardContainer extends Component {
  // state = {
  //   comments: 'whatever we get from bakcend',
  //   newComment: ""
  // };

  // addNewComment = e => {
  //   e.preventDefault();
  //   const newComment = {
  //       username:
  //       text:
  //   }
  //   this.setState({
  //     comments: [...this.state.comments, newComment],
  //     newComment: ''
  //   })
  // }

  // changeHandler = e => {
  //     this.setState({
  //         [e.target.name]: e.target.value
  //     })
  // }

  render() {
    console.log(this.props.data);
    return (
      <div>
        {this.props.filteredPosts.length === 0
          ? this.props.data.map(question => {
              return (
                <ImgMediaCard
                  question={question}
                  key={question.questionsid}
                  deleteQuestion={this.props.deleteQuestion}
                  updateQuestion={this.props.updateQuestion}
                  setUpdateQuestion={this.props.setUpdateQuestion}
                  history={this.props.history}
                />
              );
            })
          : this.props.filteredPosts.map(question => {
              return (
                <ImgMediaCard
                  question={question}
                  key={question.questionsid}
                  deleteQuestion={this.props.deleteQuestion}
                  updateQuestion={this.props.updateQuestion}
                  setUpdateQuestion={this.props.setUpdateQuestion}
                  history={this.props.history}
                />
              );
            })}
      </div>
    );
  }
}

export default CardContainer;
