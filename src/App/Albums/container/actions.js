export const types = {
  FETCH_ALBUMS_REQUEST: "FETCH_ALBUMS_REQUEST",
  FETCH_ALBUMS_SUCCESS: "FETCH_ALBUMS_SUCCESS",
  FETCH_ALBUMS_FAILURE: "FETCH_ALBUMS_FAILURE",
  SELECT_ALBUM: "SELECT_ALBUM"
};

export const fetchAlbums = id => async dispatch => {
  dispatch({
    type: types.FETCH_ALBUMS_REQUEST
  });

  try {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/${id}/albums`
    );

    const results = await response.json();

    dispatch({
      type: types.FETCH_ALBUMS_SUCCESS,
      albums: results.data
    });
  } catch (e) {
    dispatch({
      type: types.FETCH_ALBUMS_FAILURE,
      message: e.message
    });
  }
};

export const selectAlbum = album => ({
  type: types.SELECT_ALBUM,
  album
});
