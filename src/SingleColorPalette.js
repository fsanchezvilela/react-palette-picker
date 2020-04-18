import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import { withStyles } from "@material-ui/styles";
import NavBar from './NavBar';

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
  goBack:{
    width:"20%",
    height:  "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom :"-3.5px",
    opacity: 1,
    backgroundColor: "black",
    "& a":{
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255,255,255,0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
    }
  },
  PaletteFooter:{
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    fontWeight: "bold",
  },
  Emoji:{
    fontSize: "1.5rem",
    margin:"0 1rem",
  }
}
class SingleColorPalette extends Component {
  constructor(props){
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.gatherShades = this.gatherShades.bind(this);
    this.state={
      format:"hex"
    };
    this.changeFormat = this.changeFormat.bind(this);
  }
 gatherShades(palette, colorToFilterBy){
    let shades = []
    let allColors = palette.colors;
    for(let key in allColors){
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    //return all shades of given color,
    return shades.slice(1);
  }
  changeFormat(val){
    this.setState( { format: val } );
  }
  render() {
    const { format } = this.state;
    const {paletteName, emoji,id} = this.props.palette;
    const { classes } = this.props;
    const colorBoxes = this._shades.map(color => {
      return(
      <ColorBox 
        key={color.name} 
        name={color.name} 
        background={color[format]}  
        showingFullPalette={false}/>
        );
    });
    return (
      <div className={classes.Palette}>
        <NavBar handleFormatChange={ this.changeFormat } showingAllColors={ false }/>
        <div className={ classes.Colors }>
           { colorBoxes }
            <div className={ classes.goBack }>
              <Link to={`/palette/${id}`}>GO BACK</Link>
            </div>
        </div>
        <PaletteFooter 
          paletteName={ paletteName }
          emoji={ emoji }  
        />
      </div>
    )
  }
}

export default withStyles(styles)(SingleColorPalette);