import React, { Component } from 'react';
import Palette from './Palette';
import SeedColors from './SeedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    console.log(generatePalette(SeedColors[4]));
    return (
      <div>
        <Palette {...SeedColors[4]}/>
      </div>
    )
  }
}

export default App;