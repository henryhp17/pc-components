import React, { PropTypes } from 'react';
import Drawer from 'react-toolbox/lib/drawer';

class SideMenu extends React.Component {
  render () {
    return (
        <Drawer active={this.props.open} onOverlayClick={this.props.toggleSideMenu}>
          <p>Side menu contents</p>
        </Drawer>
    );
  }
}

SideMenu.propTypes = {
  open: PropTypes.boolean,
  toggleSideMenu: PropTypes.func
};

export default SideMenu;
