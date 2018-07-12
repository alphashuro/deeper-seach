import { connect } from "react-redux";
import Search from "../search";
import { changeText, fetchArtists } from "./actions";

const mapStateToProps = state => ({
  text: state.search.text,
  loading: state.search.artists.loading,
  artists: state.search.artists.data
});

const mapDispatchToProps = dispatch => ({
  onChange: event => {
    const text = event.target.value;

    dispatch(changeText(text));

    dispatch(fetchArtists(text));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
