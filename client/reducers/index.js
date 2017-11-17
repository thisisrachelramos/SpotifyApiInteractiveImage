import Sound from 'react-sound';
import { SPOTIFY_TOKENS, SPOTIFY_ME_BEGIN, SPOTIFY_ME_SUCCESS, SPOTIFY_ME_FAILURE, TOGGLE_SONG_PLAY, TOGGLE_SONG_BEGIN } from '../actions/actions';

const SONG_INITIAL_STATE = Sound.status.PAUSE;

/** The initial state; no tokens and no user info */
const initialState = {
  accessToken: null,
  refreshToken: null,
  user: {
    loading: false,
    country: null,
    display_name: null,
    email: null,
    external_urls: {},
    followers: {},
    href: null,
    id: null,
    images: [],
    product: null,
    type: null,
    uri: null,
  },
  song: {
    loading: false,
    url: '',
    playState: SONG_INITIAL_STATE,
  },

};

/**
 * Our reducer
 */
export default function reduce(state = initialState, action) {
  let updatedSongPlayState = Sound.status.PLAYING;
  const { accessToken, refreshToken } = action;
  switch (action.type) {
    // when we get the tokens... set the tokens!
    case SPOTIFY_TOKENS:
      return Object.assign({}, state, {
        accessToken,
        refreshToken,
      });

    // set our loading property when the loading begins
    case SPOTIFY_ME_BEGIN:
      return Object.assign({}, state, {
        user: Object.assign({}, state.user, {
          loading: true,
        }),
      });

    case TOGGLE_SONG_BEGIN:
      return Object.assign({}, state, {
        song: Object.assign({}, state.song, {
          loading: true,
        }),
      });
    // when we get the data merge it in
    case SPOTIFY_ME_SUCCESS:
      return Object.assign({}, state, {
        user: Object.assign({}, state.user, action.data, {
          loading: false,
        }),
      });
    case TOGGLE_SONG_PLAY:
      if (state.song.url === action.data.url && state.song.playState === Sound.status.PLAYING) {
        updatedSongPlayState = Sound.status.PAUSE;
      }
      return Object.assign({}, state, {
        song: Object.assign({}, state.song, action.data, {
          playState: updatedSongPlayState,
        }),
      });
    // currently no failure state :(
    case SPOTIFY_ME_FAILURE:
      return state;

    default:
      return state;
  }
}
