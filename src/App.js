import React, { Component } from 'react';
import './App.css';
import Welcome from './components/welcome/welcome';
import Clock from './components/clock/clock';
import Contact from './components/contact/contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Welcome name="eric" />
          <Clock />
          <Contact />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;