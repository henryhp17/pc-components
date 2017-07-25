import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      productType: props.productType,
    };
  }

  render() {
    return (
      <div>
        <h3>ID: {this.state.productType}</h3>
      </div>
    );
  }
}

ProductList.propTypes = {
  productType: PropTypes.string.isRequired,
};

export default ProductList;
