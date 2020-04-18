import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SnackBar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';

import styles from './NavbarStyles';
import 'rc-slider/assets/index.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: 'hex', open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this); 
  }
  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleFormatChange(e.target.value);
  }
  closeSnackbar() {
    this.setState({ open: false})
  }
  render() {
    const { level, changeLevel, showingAllColors,classes } = this.props;
    const { format } = this.state;
    return (
      <nav className={classes.Navbar}>
        <div className={classes.Logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>
        { showingAllColors && 
          (<div>
            <span>Level: {level}</span>
            <div className={classes.Slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                onAfterChange={changeLevel}
                step={100}
              />
            </div>
          </div>)
        }
        <div className={ classes.SelectContainer }>
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <SnackBar anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Change To { format.toUpperCase() }</span>}
          ContentProps={{
            "aria-describedby": "message-id",
          }}
          onClose={ this.closeSnackbar }
          action={[
            <IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label='close'>
              <CloseIcon/>
            </IconButton>
          ]}
        />
      </nav>
    );
  }
}

export default withStyles(styles)(NavBar);