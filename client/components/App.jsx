import React from 'react';
import PropTypes from 'prop-types';
/**
 * Main app component
 * Has a header and then render's the page content
 */
export default function SpotifyLogin({ children }) {
  return (
    <div className="spotify-login">
      <h1>Example Spotify + React + React-Router Login Flow</h1>
      <div className="page-content">
        <p>This is an example of the Authorization Code flow using routes.</p>
        { children }
      </div>
    </div>
  );
}

SpotifyLogin.propTypes = {
  children: PropTypes.element.isRequired,
};
