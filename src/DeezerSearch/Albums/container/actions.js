export const types = {
  FETCH_ALBUMS_REQUEST: "FETCH_ALBUMS_REQUEST",
  FETCH_ALBUMS_SUCCESS: "FETCH_ALBUMS_SUCCESS",
  FETCH_ALBUMS_FAILURE: "FETCH_ALBUMS_FAILURE",
  SELECT_ALBUM: "SELECT_ALBUM"
};

export const fetchAlbums = id => async (dispatch, getState) => {
  dispatch({
    type: types.FETCH_ALBUMS_REQUEST
  });

  const state = getState();
  const token = state.auth.token;
  const backend = process.env.REACT_APP_BACKEND_URL;

  try {
    const response = await fetch(`${backend}/${id}/albums`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

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
