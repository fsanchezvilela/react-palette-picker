import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MiniPalette } from 'app/components/index';
import { withStyles } from '@material-ui/core';

import styles from './PaletteListStyles';

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
     const { classes, palettes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>ReactColors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => {
              return (
                <MiniPalette {...palette}
                  handleClick={() => { this.goToPalette(palette.id) }} 
                  handleDelete={deletePalette} 
                  key={palette.id}
                  id={palette.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);