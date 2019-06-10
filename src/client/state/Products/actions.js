import fetch from 'isomorphic-fetch';
import {
  FETCH_PRODUCTS_SERVER_INIT,
  FETCH_PRODUCTS_SERVER_SUCCESS,
  FETCH_PRODUCTS_SERVER_FAILURE,
} from 'STATE/Products/actionTypes';

import products from 'CLIENT_UTILS/products';

export const fetchProductsInit = () => ({
  type: FETCH_PRODUCTS_SERVER_INIT,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_SERVER_FAILURE,
  error,
});

export const fetchProductsSuccess = (payload) => ({
  type: FETCH_PRODUCTS_SERVER_SUCCESS,
  payload,
});

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(fetchProductsInit());
    // placeholder until api is complete
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const product = await resp.json();
    return dispatch(fetchProductsSuccess(products));
  } catch (err) {
    return dispatch(fetchProductsFailure(err));
  }
};
