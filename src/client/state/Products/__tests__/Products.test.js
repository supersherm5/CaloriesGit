/* eslint-disable global-require */
/* eslint-disable max-nested-callbacks */
/**
 * Tests for state/products
 */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { INIT_STATE } from 'STATE/Products/constants';
import {
  FETCH_PRODUCTS_SERVER_INIT,
  FETCH_PRODUCTS_SERVER_SUCCESS,
  FETCH_PRODUCTS_SERVER_FAILURE,
} from 'STATE/Products/actionTypes';

import {
  fetchProductsInit,
  fetchProductsFailure,
  fetchProductsSuccess,
  fetchProducts,
} from 'STATE/Products/actions';

import products from 'CLIENT_UTILS/products';


const mockConfiguredStore = configureStore([thunk]);

describe('State/Products', () => {
  afterEach(() => {
    jest.resetModules();
  });
  describe('Actions', () => {
    it('fetchProductsInit', () => {
      expect(fetchProductsInit()).toEqual({ type: FETCH_PRODUCTS_SERVER_INIT });
    });
    it('fetchProductsFailure', () => {
      expect(fetchProductsFailure('err')).toEqual({ type: FETCH_PRODUCTS_SERVER_FAILURE, error: 'err' });
    });
    it('fetchProductsSuccess', () => {
      expect(fetchProductsSuccess(products)).toEqual({ type: FETCH_PRODUCTS_SERVER_SUCCESS, payload: products });
    });
    it('fetchProducts: Success', async () => {
      const mockStore = mockConfiguredStore(INIT_STATE);
      await fetchProducts()(mockStore.dispatch);
      const actions = mockStore.getActions();
      expect(actions[0]).toEqual(fetchProductsInit());
      expect(actions[1]).toEqual(fetchProductsSuccess(products));
    });
  });
});
