/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import './App.css';
import logo from "./images/PAXMDB.svg";
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';

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
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);


export default App;