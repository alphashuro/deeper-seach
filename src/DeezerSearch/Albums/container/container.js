import React, { Component } from "react";
import { connect } from "react-redux";
import Albums from "../Albums";
import { fetchAlbums } from "./actions";

class AlbumsContainer extends Component {
  componentDidUpdate(prevProps) {
    const { artist } = this.props;

    const prevArtist = prevProps.artist;

    if (!artist) return;
    if (prevArtist && artist.id === prevArtist.id) return;

    this.props.fetchAlbums();
  }

  render() {
    return <Albums {...this.props} />;
  }
}

const mapStateToProps = ({ deezer }) => ({
  artist: deezer.artists.selected,
  albums: deezer.albums.data,
  loading: deezer.albums.loading
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: id => dispatch(fetchAlbums(id))
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  fetchAlbums: () => dispatchProps.fetchAlbums(stateProps.artist.id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AlbumsContainer);
