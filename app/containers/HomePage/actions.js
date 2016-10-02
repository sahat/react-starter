/**
 * Home Actions
 */

export const REQUEST_LOCATION = 'REQUEST_LOCATION';
export const GET_LOCATION = 'GET_LOCATION';

export function requestLocation() {
  return {
    type: REQUEST_LOCATION
  };
}

export function getLocation() {
  return (dispatch) => {
    // Display loading text until success or error callback is resolved
    dispatch(requestLocation());

    // Get latitude and longitude coordinates
    const successCallback = (position) => {
      dispatch({
        type: GET_LOCATION,
        location: [position.coords.latitude, position.coords.longitude]
      });
    };

    // Location unavailable or permission denied
    const errorCallback = (err) => {
      dispatch({
        type: GET_LOCATION,
        error: err.message
      });
    };

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
  };
}
