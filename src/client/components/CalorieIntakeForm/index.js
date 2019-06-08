import React from 'react';
import { connect } from 'react-redux';

import { getProducts } from 'STATE/Products/selectors';
import { fetchProducts } from 'STATE/Products/actions';

import CalorieIntakeForm from './component';

const mapStateToProps = (state) => ({
  getProducts: getProducts(state),
});


export default connect(mapStateToProps)(CalorieIntakeForm);
export const loadData = ({ dispatch }) => dispatch(fetchProducts());
