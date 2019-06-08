import {
  FETCH_PRODUCTS_SERVER_INIT,
  FETCH_PRODUCTS_SERVER_SUCCESS,
  FETCH_PRODUCTS_SERVER_FAILURE,
} from 'STATE/Products/actionTypes';

import {
  INIT_STATE,
} from 'STATE/Products/constants';

export default (state = INIT_STATE, { type, payload, error}) => {
  switch (type) {
    case FETCH_PRODUCTS_SERVER_INIT:
      return {
        ...state,
        initialized: true,
      };
    
    case FETCH_PRODUCTS_SERVER_FAILURE:
      return {
        ...state,
        error,
        failed: true, 
      };
    
    case FETCH_PRODUCTS_SERVER_SUCCESS:
      return {
        ...state,
        failed: false,
        products: payload,
      };
  
    default:
      return state;
  }
};