import React, { Component } from "react";
import { connect } from "react-redux";
import Tracks from "../Tracks";
import { fetchTracks } from "./actions";

class AlbumsContainer extends Component {
  componentDidUpdate(prevProps) {
    const { album } = this.props;
    const prevAlbum = prevProps.album;

    if (!album) return;
    if (prevAlbum && album.id === prevAlbum.id) return;

    this.props.fetchTracks();
  }

  render() {
    return <Tracks {...this.props} />;
  }
}

const mapStateToProps = ({ deezer }) => ({
  album: deezer.albums.selected,
  tracks: deezer.tracks.data,
  loading: deezer.tracks.loading
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: album => dispatch(fetchTracks(album))
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  fetchTracks: () => dispatchProps.fetchTracks(stateProps.album)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AlbumsContainer);
