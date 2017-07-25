import React, { Component } from 'react';
import {
  Tabs,
  Tab,
} from 'material-ui';

import ProductType from './ProductType';
import ProductList from './ProductList';

class Products extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeTab: 'productType',
      activeProductType: 'motherboard',
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(value) {
    this.setState({
      activeTab: value,
    });
  }

  render() {
    return (
      <Tabs
        value={this.state.activeTab}
        onChange={this.handleTabChange}
      >
        <Tab label="Product Type" value="productType">
          <ProductType />
        </Tab>
        <Tab label="Product List" value="productList">
          <ProductList productType={this.state.activeProductType} />
        </Tab>
      </Tabs>
    );
  }
}

export default Products;
