import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

class App extends React.Component {

  componentDidMount() {
    this.props.history.push('/login')
  }

  render () {
    return (
      
        <div className="App">
            <Route  path='/login' render={(props) => <Login {...props} />} />
            <Route  path='/signup' render={(props) => <Signup {...props} />} />
        </div>
    
    );
  }

}

export default withRouter(App);
