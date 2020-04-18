import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './NavBar';
import './Palette.css';
import { withStyles } from "@material-ui/styles";
import PaletteFooter from './PaletteFooter';

const styles={
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  Colors:{
    height: "90%",
    width: "auto",
  },
}

class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = { level: 500, format:'hex' };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(val) {
    this.setState({ format: val });
  }
  render() {
    const { colors, paletteName, emoji, id, } = this.props.palette;
    const { classes } = this.props;
    const { level,format } = this.state
    const colorBoxes = colors[level].map(color => (
      <ColorBox 
        key={color.id} 
        background={color[format]} 
        name={color.name} 
        id={ color.id } 
        paletteId= { id }
        showingFullPalette = { true }
        moreUrl = {`/palette/${id}/${color.id}`}
        />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleFormatChange={this.changeFormat}
          showingAllColors={ true }
        />
        <div className={classes.Colors}>{colorBoxes}</div>
      <PaletteFooter 
        emoji={ emoji } 
        paletteName={ paletteName } />
      </div>
    );
  }
}
export default withStyles(styles)(Palette);
