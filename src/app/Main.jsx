/**
 *  * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { deepOrange500 } from 'material-ui/styles/colors';
import { getMuiTheme, MuiThemeProvider } from 'material-ui/styles';

import Header from './containers/Header';
import Home from './containers/Home';
import Products from './containers/Products';

import pcComponentsApp from './reducers/reducers';

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

// Initialize redux store
const store = createStore(pcComponentsApp);

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
        <Provider store={store}>
          <Router>
            <div style={styles.container}>
              <Header />
              <div style={styles.contentBody}>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />

              </div>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default Main;
