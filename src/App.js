/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import './App.css';
import logo from "./images/PAXMDB.svg";
import MovieList from './components/MovieList';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const App = () => (
  <Router>
    <div className="App" >
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MovieList} />
        <Route path="/test" component={Test} />
      </Switch>
    </div>
  </Router>
);

const Test = () => (
  <h1>test</h1>
);

export default App;