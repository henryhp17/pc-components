import React, { PropTypes } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

class Header extends React.Component {
  render () {
    return (
        <AppBar title="Computer Components" leftIcon="menu" onLeftIconClick={this.props.toggleSideMenu}>
          <Navigation type="horizontal">
            <Link href="/products" label="Products"/>
            <Link href="/builds" label="Builds"/>
          </Navigation>
        </AppBar>
    );
  }
}

Header.propTypes = {
  toggleSideMenu: PropTypes.func
};

export default Header;
