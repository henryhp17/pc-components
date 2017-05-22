import React, { Component } from 'react';
import {
  AppBar,
  IconMenu,
  MenuItem,
  IconButton,
} from 'material-ui';
import { NavigationMoreVert } from 'material-ui/svg-icons';

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    return (
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
        onLeftIconButtonTouchTap={this.props.}
      >
      </AppBar>
    );
  }
}

export default Header;
