import React, { Component } from 'react';
import './App.css';
import logo from "./images/PAXMDB.svg"

import Movie from './components/Movie'

const movies = [
  {
    id: 1,
    title: 'Star wars'
  },
  {
    id: 2,
    title: 'Spider man'
  },
  {
    id: 3,
    title: 'Donkey man'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {movies.map(movie => (<Movie key={movie.id} movie={movie} />))}
      </div>
    );
  }
}

export default App