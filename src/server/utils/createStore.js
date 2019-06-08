import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(
  thunk,
);
const initState = {};
const reducers = () => ({});

export default () => {
  const store = createStore(reducers, initState, middleware);
  return store;
};
