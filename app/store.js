import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import createReducer from './reducers';

const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}) {
  const enhancer = compose(
    applyMiddleware(thunk),
    devtools()
  );

  const store = createStore(
    createReducer(),
    initialState,
    enhancer
  );

  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const createReducers = require('./reducers').default;
      store.replaceReducer(createReducers());
    });
  }

  return store;
}
