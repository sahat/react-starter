import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}) {
  const enhancer = compose(
    applyMiddleware(thunk),
    devtools()
  );

  const store = createStore(
    rootReducer,
    initialState,
    enhancer
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
