import React, { Component } from 'react';
import Button from './Button';
import logo from '../logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Spotify</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="control-bar">
          <div class="player-control">
            <Button text="Previous" />
            <Button text="Play" />
            <Button text="Pause" />
            <Button text="Stop" />
            <Button text="Next" />
            <Button text="Shuffle Off" />
            <Button text="Repeat Off" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
