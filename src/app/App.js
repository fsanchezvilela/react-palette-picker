import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Palette,
  PaletteList,
  SingleColorPalette,
  NewPaletteForm,
} from 'app/components/index';
import seedColors from './utils/seedColors';
import { generatePalette } from './utils/colorHelpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedColors }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }
  savePalette(newPalette) {
    this.setState({palettes: [...this.state.palettes, newPalette]})
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new"
          render={(routeProps) => <NewPaletteForm savePalette={this.savePalette} {...routeProps} />}
        />
        <Route
          exact
          path="/"
          render={(routeProps) => (
            <PaletteList palettes={this.state.palettes} {...routeProps} />
          )}
        />
        <Route exact path="/" render={() => <h1>Palette List Goes Here</h1>} />
        <Route
          exact
          path="/palette/:id"
          render={(routeProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={(routeProps) => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;