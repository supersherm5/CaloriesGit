import fetch from 'isomorphic-fetch';
import {
  FETCH_PRODUCTS_SERVER_INIT,
  FETCH_PRODUCTS_SERVER_SUCCESS,
  FETCH_PRODUCTS_SERVER_FAILURE,
} from 'STATE/Products/actionTypes';

// import products from 'CLIENT_UTILS/products';

export const fetchProductsInit = () => ({
  type: FETCH_PRODUCTS_SERVER_INIT,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_SERVER_FAILURE,
  error,
});

export const fetchProductsSuccuess = (payload) => ({
  type: FETCH_PRODUCTS_SERVER_SUCCESS,
  payload,
});

export const fetchProducts = () => async (dispatch, getState) => {
  try {
    dispatch(fetchProductsInit());
    const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const products = await resp.json();
    return dispatch(fetchProductsSuccuess([products]));
  } catch (err) {
    return dispatch(fetchProductsFailure(err));
  }
};
