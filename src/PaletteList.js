import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { withStyles } from '@material-ui/styles';

import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  goToPalette(id) {
    console.log('HI');
    this.props.history.push(`/palette/${id}`);
  }

  render() {
     const { classes, palettes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>ReactColors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => {
              return (
                <MiniPalette {...palette}
                  handleClick={() => { this.goToPalette(palette.id) }} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);