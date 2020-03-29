import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
  render() {
     const { palettes } = this.props;
    return (
      <div>
        <h1>React Colors</h1>
        {palettes.map(palette => {
          return (
              <Link to={`/palette/${palette.id}`}>
               <MiniPalette {...palette}/>
              </Link>
          );
        })}
      </div>
    );
  }
}

export default PaletteList;