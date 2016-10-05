import React, { PropTypes } from 'react';

function FetchError(props) {
  if (!props.message) {
    return null;
  }
  return (
    <div className="bg-danger p-a-1">
      <h4>Error</h4>
      <p>{props.message}</p>
    </div>
  );
}

FetchError.propTypes = {
  message: PropTypes.string
};

export default FetchError;
