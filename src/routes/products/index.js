import React from 'react';
import Products from './Products';
import fetch from '../../core/fetch';

export const path = '/products';
export const action = async (state) => {
  // const response = await fetch('/graphql?query={news{title,link,contentSnippet}}');
  const data = {
    'productList': [
      {
        'name': 'Motherboard',
        'description': 'motherboard'
      }, {
        'name': 'Processor',
        'description': 'processor'
      }
    ]
  };
  state.context.onSetTitle('Product Type');
  return <Products productList={data.productList} />;
};
