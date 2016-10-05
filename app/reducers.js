/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { fromJS } from 'immutable';
import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';

import globalReducer from 'containers/App/reducer';
import home from 'containers/HomePage/reducer';
import pagination from 'containers/ExamplesPage/Pagination/reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    home,
    pagination,
    // route: routeReducer,
    // global: globalReducer,
    // ...asyncReducers,
  });
}
