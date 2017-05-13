import React, { Component } from 'react';
import './App.css';
var AnimalAgeCalculator = require("./AnimalAgeCalculator");
import FullScreen from 'react-fullscreen';

class App extends Component {

  render() {
    return (
        <div className="App">
        <FullScreen className="App">
      <AnimalAgeCalculator />
          </FullScreen>
        </div>
    );
  }
}

export default App;
