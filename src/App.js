import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login" component={Login} />
        
      </Router>
    </div>
  );
}

export default App;
