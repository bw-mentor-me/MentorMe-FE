import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MenteeApp from "./Mentee/MenteeApp";

class App extends React.Component {
  componentDidMount() {
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="App">
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/signup" render={props => <Signup {...props} />} />
        <Route
          path="/questionsFeed"
          render={props => <MenteeApp {...props} />}
        />
      </div>
    );
  }
}

export default withRouter(App);

// import React, { Component } from "react";
// import MenteeApp from "./Mentee/MenteeApp";
// // import MentorApp from "./Mentor/MentorApp";

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <MenteeApp />
//       </div>
//     );
//   }
// }

// export default App;
