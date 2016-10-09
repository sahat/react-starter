/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';

// Include all your app reducers here
import home from 'containers/HomePage/reducer';
import pagination from 'containers/ExamplesPage/Pagination/reducer';

export default combineReducers({
  home,
  pagination
});
