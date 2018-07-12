import React, { Component } from "react";
import { connect } from "react-redux";
import Albums from "../Albums";
import { selectAlbum, fetchAlbums } from "./actions";

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

const mapStateToProps = ({ artists, albums }) => ({
  artist: artists.selected,
  albums: albums.data,
  loading: albums.loading
});

const mapDispatchToProps = dispatch => ({
  fetchAlbums: id => dispatch(fetchAlbums(id)),
  selectAlbum: album => dispatch(selectAlbum(album))
});

const mergeProps = (stateProps, dispatchProps) => ({
  ...stateProps,
  ...dispatchProps,
  fetchAlbums: () => dispatchProps.fetchAlbums(stateProps.artist.id)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(AlbumsContainer);
