import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  IconMenu,
  MenuItem,
  Menu,
  IconButton,
  Drawer,
} from 'material-ui';
import {
  NavigationClose,
  NavigationMoreVert,
} from 'material-ui/svg-icons';

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      sideMenuOpen: false,
      selectedMenu: 'home',
    };
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
    this.mainMenuChange = this.mainMenuChange.bind(this);
    this.mainMenuItemTouchTap = this.mainMenuItemTouchTap.bind(this);
  }

  toggleSideMenu() {
    this.setState({
      sideMenuOpen: !this.state.sideMenuOpen,
    });
  }

  mainMenuChange(event, menuItem, index) {
    this.setState({
      sideMenuOpen: false,
    });
  }

  mainMenuItemTouchTap(event, menuItem) {
    this.setState({
      selectedMenu: menuItem.props.value,
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title="Computer Components"
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton><NavigationMoreVert /></IconButton>
              }
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          }
          onLeftIconButtonTouchTap={this.toggleSideMenu}
        />
        <Drawer
          open={this.state.sideMenuOpen}
        >
          <AppBar
            title="Main Menu"
            iconElementLeft={
              <IconButton><NavigationClose /></IconButton>
            }
            onLeftIconButtonTouchTap={this.toggleSideMenu}
            onTitleTouchTap={this.toggleSideMenu}
          />
          <Menu
            onChange={this.mainMenuChange}
            onItemTouchTap={this.mainMenuItemTouchTap}
            value={this.state.selectedMenu}
          >
            <MenuItem value="home">Home</MenuItem>
            <MenuItem value="products">Products</MenuItem>
            <MenuItem value="builds">Builds</MenuItem>
            <MenuItem value="games">Games</MenuItem>
          </Menu>
        </Drawer>
      </div>
    );
  }
}

Header.propTypes = {
  sideMenuOpen: PropTypes.bool,
  selectedMenu: PropTypes.string
};
Header.defaultProps = {
  sideMenuOpen: false,
  selectedMenu: 'home',
};

export default Header;
