/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 */

import { LOAD_POPULAR_REPOS, LOAD_POPULAR_REPOS_SUCCESS, LOAD_POPULAR_REPOS_FAILURE } from './actions';

const initialState = {
  data: [],
  error: null,
  totalPages: 1
};

function pagination(state = initialState, action) {
  switch (action.type) {
    case LOAD_POPULAR_REPOS:
      return {
        ...state,
        error: null
      };
    case LOAD_POPULAR_REPOS_SUCCESS:
      return {
        ...state,
        data: action.data.items,
        totalPages: action.data.total_count / 10
      };
    case LOAD_POPULAR_REPOS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

export default pagination;
