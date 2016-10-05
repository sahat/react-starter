/*
 * PaginationReducer
 */

import { LOAD_POPULAR_REPOS, LOAD_POPULAR_REPOS_SUCCESS, LOAD_POPULAR_REPOS_FAILURE } from './actions';

const initialState = {
  data: [],
  errorMessage: null,
  totalPages: 1
};

function pagination(state = initialState, action) {
  switch (action.type) {
    case LOAD_POPULAR_REPOS:
      return {
        ...state,
        errorMessage: null
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
        errorMessage: action.message
      };
    default:
      return state;
  }
}

export default pagination;
