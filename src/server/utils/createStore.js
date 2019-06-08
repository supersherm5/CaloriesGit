import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'STATE/reducers';

const middleware = applyMiddleware(
  thunk,
);
const initState = {};

export default () => {
  const store = createStore(reducers, initState, middleware);
  return store;
};
