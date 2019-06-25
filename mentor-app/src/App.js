import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
          <Login />
          <Route exact path='/' component={App} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
      </div>
    </Router>
  );
}

export default App;
