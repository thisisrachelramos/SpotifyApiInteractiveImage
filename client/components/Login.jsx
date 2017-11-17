import React from 'react';
import loginSVG from '../log_in.svg';

/**
 * Our login page
 * Has a login button that hits the login url
 */
export default function Login() {
  return (
    <div className="login">
      <h2>Here&apos;s our login page!</h2>
      <a href="/login">
        <img src={loginSVG} alt="svg" />
      </a>
    </div>
  );
}
