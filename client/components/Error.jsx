import React from 'react';
import PropTypes from 'prop-types';

/**
 * Our error page
 * Displays the error
 */
export default function Login({ errorMsg }) {
  return (
    <div className="error">
      <h2>An Error Occured</h2>
      <p>
        { errorMsg }
      </p>
    </div>
  );
}

Login.propTypes = {
  errorMsg: PropTypes.string.isRequired,
};
