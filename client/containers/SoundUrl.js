import { connect } from 'react-redux';
import { getArtistSong } from '../actions/actions';
import ILineUp from '../components/InteractiveLineup';


// state nor reducer cares about
// the exisitence of this container logic
// all it does is handle dispatch for dumb presentation layer
const mapDispatchToProps = dispatch => ({
  onArtistClick: (artistName) => {
    dispatch(getArtistSong(artistName));
  },
});


const SoundUrl = connect(
  state => state,
  mapDispatchToProps,
)(ILineUp);


export default SoundUrl;
