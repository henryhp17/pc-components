import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Products.scss';

function Products({ productList }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}>Product Type</h1>
      </div>
    </div>
  );
}

Products.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  })).isRequired,
};

export default withStyles(Products, s);
