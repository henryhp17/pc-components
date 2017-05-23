/**
 *  * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, { Component } from 'react';
import { deepOrange500 } from 'material-ui/styles/colors';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';

import Header from './fragment/Header';
import ProductType from './views/ProductType';

const styles = {
  container: {},
  contentBody: {
    align: 'center',
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <Header />
          <div style={styles.contentBody}>
            <ProductType />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
