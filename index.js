import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Timer from './Timer'
import ShowTimer from './ShowTimer'
import Linki from './Linki'
import CallTimer from './CallTimer'
import SwR from './SwR'
import FRS from './FRS'
import ReactSlider from './ReactSlider'
class App extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>

<ReactSlider />

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
