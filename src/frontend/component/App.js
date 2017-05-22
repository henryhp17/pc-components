import React from 'react';
import Header from './fragment/Header';
import SideMenu from './fragment/SideMenu';
import ProductType from './fragment/ProductType';

class App extends React.Component {
  state = {
    isSideMenuOpen: false
  };

  toggleSideMenu = () => {
    this.setState({isSideMenuOpen: !this.state.isSideMenuOpen});
  };

  render () {
    return (
        <div>
          <Header toggleSideMenu={this.toggleSideMenu} />
          <SideMenu open={this.state.isSideMenuOpen} toggleSideMenu={this.toggleSideMenu} />
          <ProductType />
        </div>
    );
  }
}

export default App;
