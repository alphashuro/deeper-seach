import React, { Component } from "react";
import { connect } from "react-redux";
import AutoComplete from "../AutoComplete";
import { fetchArtists, selectArtist } from "./actions";

class AutoCompleteContainer extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.text === prevProps.text) return;

    this.props.fetchArtists();
  }
  render() {
    return <AutoComplete {...this.props} />;
  }
}

const mapStateToProps = state => ({
  text: state.deezer.text,
  error: state.deezer.artists.error,
  loading: state.deezer.artists.loading,
  artists: state.deezer.artists.data
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: searchText => dispatch(fetchArtists(searchText)),
  selectArtist: artist => dispatch(selectArtist(artist))
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  fetchArtists() {
    dispatchProps.fetchArtists(stateProps.text);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AutoCompleteContainer);
