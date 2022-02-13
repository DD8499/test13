import React, { Component } from 'react';
import './App.css';
import Fetch from './Fetch';
import Para from './para';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Tribute To Lata Mangeshkar</h2>
        <Fetch />
        <Para/>
      </div>
    );
  }
}

export default App;
