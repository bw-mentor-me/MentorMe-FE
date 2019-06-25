import React, { Component } from "react";
import ImgMediaCard from "./ImgMediaCard";

export class CardContainer extends Component {
  render() {
    return (
      <div>
        {this.props.filteredPosts.length === 0
          ? this.props.data.map(question => {
              return <ImgMediaCard question={question} key={question.id} />;
            })
          : this.props.filteredPosts.map(question => {
              return <ImgMediaCard question={question} key={question.id} />;
            })}

        {/* {this.props.data.map(question => {
          return <ImgMediaCard question={question} key={question.id} />;
        })} */}
      </div>
    );
  }
}

export default CardContainer;
