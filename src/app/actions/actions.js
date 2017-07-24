/*
 * action types
 */

export const ADD_PRODUCTS = 'ADD_PRODUCTS';

/*
 * action creators
 */

export function addProducts(product) {
  return { type: ADD_PRODUCTS, product };
}
