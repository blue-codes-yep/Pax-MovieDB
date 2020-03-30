import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome'


class App extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      value: ''
    }
  }
  submit = () => {
    console.log(this.textInput.current.value)
    this.setState({ value: this.textInput.current.value })
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Welcome text="Welcome to using props" />
            <h3>Value: {this.state.value}</h3>
          </p>
          <input type="text" ref={this.textInput} />
          <button onClick={this.submit}>Show Value</button>
        </header>
      </div>
    );
  }
}

export default App