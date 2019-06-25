import React, { Component } from "react";
import ImgMediaCard from "./ImgMediaCard";

export class CardContainer extends Component {
  render() {
    return (
      <div>
        {this.props.data.map(question => {
          return <ImgMediaCard question={question} />;
        })}
      </div>
    );
  }
}

export default CardContainer;
