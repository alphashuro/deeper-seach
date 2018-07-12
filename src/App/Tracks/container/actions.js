export const types = {
  FETCH_TRACKS_REQUEST: "FETCH_TRACKS_REQUEST",
  FETCH_TRACKS_SUCCESS: "FETCH_TRACKS_SUCCESS",
  FETCH_TRACKS_FAILURE: "FETCH_TRACKS_FAILURE"
};

export const fetchTracks = album => async dispatch => {
  dispatch({
    type: types.FETCH_TRACKS_REQUEST
  });

  try {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/${album.tracklist}`
    );

    const results = await response.json();

    dispatch({
      type: types.FETCH_TRACKS_SUCCESS,
      tracks: results.data
    });
  } catch (e) {
    dispatch({
      type: types.FETCH_TRACKS_FAILURE,
      message: e.message
    });
  }
};
