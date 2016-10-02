/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 */

import { REQUEST_LOCATION, GET_LOCATION } from './actions';

const initialState = {
  location: null,
  error: null,
  isFetching: false
};

function home(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOCATION:
      return {
        ...state,
        isFetching: true
      };
    case GET_LOCATION:
      return {
        ...state,
        location: action.location,
        error: action.error,
        isFetching: false
      };
    default:
      return state;
  }
}

export default home;
