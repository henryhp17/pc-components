import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Drawer, MenuItem } from 'material-ui';

class SideMenu extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: props.open,
    };
  }

  toggleSideMenu() {
    this.state.open = !this.state.open;
  }

  render() {
    return (
      <Drawer open={this.state.open}>
        <MenuItem>Menu 1</MenuItem>
        <MenuItem>Menu 2</MenuItem>
      </Drawer>
    );
  }
}

SideMenu.propTypes = {
  open: PropTypes.bool,
};

SideMenu.defaultProps = {
  open: false,
};

export default SideMenu;
