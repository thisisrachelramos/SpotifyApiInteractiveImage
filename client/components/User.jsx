import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMyInfo, setTokens } from '../actions/actions';
import Lineup from './Lineup';
/**
 * Our user page
 * Displays the user's information
 */
class User extends Component {
  /** When we mount, get the tokens from react-router and initiate loading the info */
  componentDidMount() {
    // params injected via react-router (thank you!)
    // dispatch injected via connect (react redux, thank you!)
    const { dispatch, params } = this.props;
    // access token and refresh token aquired thru react-router
    const { accessToken, refreshToken } = params;
    dispatch(setTokens({
      accessToken,
      refreshToken,
    }));
    dispatch(getMyInfo());
  }

  /** Render the user's info */
  render() {
    const { user } = this.props;
    //     const {
    // loading, display_name,
    // images, id, email, external_urls, href, country, product
    //  } = user;
    const { loading, display_name } = user;
    // if we're still loading, indicate such
    if (loading) {
      return <h2>Loading...</h2>;
    }
    return (
      <div className="user">
        <h2>{ `Logged in as ${display_name}` }</h2>
        <div className="user-content">
          <Lineup />
        </div>
      </div>);
  }
}

export default connect(state => state)(User);


User.propTypes = {
  params: PropTypes.shape({
    accessToken: PropTypes.string.isRequired,
    refreshToken: PropTypes.string.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({ display_name: PropTypes.string.isRequired }).isRequired,
};
