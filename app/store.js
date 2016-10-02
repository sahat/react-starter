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
      System.import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}
