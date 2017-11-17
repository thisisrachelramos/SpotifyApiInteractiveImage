// Spotify to call into our API wrapper
import Spotify from 'spotify-web-api-js';

const spotifyApi = new Spotify();

// our constants
export const SPOTIFY_TOKENS = 'SPOTIFY_TOKENS';
export const SPOTIFY_ME_BEGIN = 'SPOTIFY_ME_BEGIN';
export const SPOTIFY_ME_SUCCESS = 'SPOTIFY_ME_SUCCESS';
export const SPOTIFY_ME_FAILURE = 'SPOTIFY_ME_FAILURE';
export const TOGGLE_SONG_PLAY = 'TOGGLE_SONG_PLAY';
export const TOGGLE_SONG_BEGIN = 'TOGGLE_SONG_BEGIN';


/** set the app's access and refresh tokens */
export function setTokens({ accessToken, refreshToken }) {
  if (accessToken) {
    spotifyApi.setAccessToken(accessToken);
  }
  return {
    type: SPOTIFY_TOKENS,
    accessToken,
    refreshToken,
  };
}

/* get the user's info from the /me api */
export function getMyInfo() {
  return (dispatch) => {
    dispatch({
      type: SPOTIFY_ME_BEGIN,
    });
    spotifyApi.getMe().then((data) => {
      dispatch({
        type: SPOTIFY_ME_SUCCESS,
        data,
      });
    }).catch((e) => {
      dispatch({
        type: SPOTIFY_ME_FAILURE,
        error: e,
      });
    });
  };
}

/*
Action method to get tracks that match artist and then dispatch
*/
export function getArtistSong(artistName) {
  return (dispatch) => {
    // The max limit the API accepts is 50
    spotifyApi.searchTracks(`artist:${artistName}`, {
      limit: 50,
    }).then((data) => {
      // We want to filter out those w/o a peview
      let trackItems = data.tracks.items;
      trackItems = trackItems.filter(track => track.preview_url !== null);
      const trackUrl = trackItems === undefined ? '' : trackItems[0].preview_url;

      // dispatch action with song url to update state and re-render component
      dispatch({
        type: TOGGLE_SONG_PLAY,
        data: {
          url: trackUrl,
        },
      });
    }).catch((e) => {
      dispatch({
        type: SPOTIFY_ME_FAILURE,
        error: e,
      });
    });
  };
}

