import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="App">
          <Login />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
      </div>
    </Router>
  );
}

export default App;
