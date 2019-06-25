import React, { Component } from "react";
import MenteeApp from "./Mentee/MenteeApp";
// import MentorApp from "./Mentor/MentorApp";

export class App extends Component {
  // state = {
  //   mentee: false
  // };

  render() {
    return (
      <div>
        <MenteeApp />
      </div>
    );

    // return this.state.mentee ? <MenteeApp /> : <MentorApp />;
  }
}

export default App;
