import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class NavBar extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <nav className="Navbar">
        <div className="logo">
          <a href="/">reactcolorpicker</a>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              onAfterChange={changeLevel}
              step={100}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;