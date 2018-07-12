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
  text: state.text,
  error: state.artists.error,
  loading: state.artists.loading,
  artists: state.artists.data,
  show: state.artists.show
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
