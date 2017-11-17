import PropTypes from 'prop-types';
import React from 'react';
import Sound from 'react-sound';
import fabfour from '../fabfour.png';

export default function ILineUp({ song, onArtistClick }) {
  return (
    <div>
      <div>
        <Sound url={song.url} playStatus={song.playState} volume={50} />
        <svg viewBox="0 0 67 64" preserveAspectRatio="xMinYMin meet" height="64mm" width="67mm">
          <image width="67" height="64" href={fabfour} />
          <g id="layer1" transform="translate(-40.254463,-73.105804)">
            { /* <a href="//georgeharrison.com/" id="george harrison"> */ }
            <rect opacity="0" id="rect64" width="15" height="13" y="87" x="44" onClick={() => onArtistClick('george harrison')} />
            { /* </a> */ }
            { /* <a href="//paulmccartney.com/" id="paul mccartney"> */ }
            <rect opacity="0" y="86.623718" x="84.08667" height="15.501633" width="14.165285" id="rect76" onClick={() => onArtistClick('paul mccartney')} />
            { /* </a> */ }
            { /* <a href="//johnlennon.com/" id="john lennon"> */ }
            <rect opacity="0" y="114.95428" x="43.996235" height="16.303444" width="17.372517" id="rect78" onClick={() => onArtistClick('john lennon')} />
            { /* </a> */ }
            { /* <a href="//ringostarr.com/" id="ringo starr"> */ }
            <rect opacity="0" y="120.0324" x="81.948509" height="11.22532" width="14.967093" id="rect80" onClick={() => onArtistClick('ringo starr')} />
            { /* </a> */ }
          </g>
        </svg>
      </div>
      <p className="App-intro">
        <a href="https://en.wikipedia.org/wiki/The_Club_(dining_club)#Members">
            Example of an old school image map using HTML
        </a>
      </p>
    </div>);
}

ILineUp.propTypes = {
  onArtistClick: PropTypes.func.isRequired,
  song: PropTypes.shape({
    url: PropTypes.string.isRequired,
    playState: PropTypes.string.isRequired,
  }).isRequired,
};
