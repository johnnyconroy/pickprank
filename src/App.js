import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';
import SearchForm from './components/SearchForm.js';
import Results from './components/Results.js';
import NavbarInstance from './components/NavbarInstance.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarInstance />
        <Jumbotron>
          <Grid>
            <h1>Search App</h1>
            <p>This is a simple search app</p>
            <SearchForm />
          </Grid>
        </Jumbotron>
        <MuiThemeProvider>
          <MyAwesomeReactComponent />
        </MuiThemeProvider>
        <Results />
      </div>
    );
  }
}

export default App;
