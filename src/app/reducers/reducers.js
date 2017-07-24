import { combineReducers } from 'redux';
import { ADD_PRODUCTS } from '../actions/actions';

function products(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return [
        ...state,
        action.product,
      ];
    default:
      return state;
  }
}

const pcComponentsApp = combineReducers({
  products,
});

export default pcComponentsApp;
