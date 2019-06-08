import { combineReducers } from 'redux';

import { NAME as productsName } from 'STATE/Products/constants';
import productsReducer from 'STATE/Products/reducer';

export default combineReducers({
  [productsName]: productsReducer,
});
