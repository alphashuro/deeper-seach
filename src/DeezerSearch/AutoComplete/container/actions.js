export const types = {
  FETCH_ARTISTS_REQUEST: "FETCH_ARTISTS_REQUEST",
  FETCH_ARTISTS_SUCCESS: "FETCH_ARTISTS_SUCCESS",
  FETCH_ARTISTS_FAILURE: "FETCH_ARTISTS_FAILURE",
  SELECT_ARTIST: "SELECT_ARTIST"
};

export const fetchArtistsRequest = () => ({
  type: types.FETCH_ARTISTS_REQUEST
});

export const fetchArtistsSuccess = artists => ({
  type: types.FETCH_ARTISTS_SUCCESS,
  artists
});

export const fetchArtistsFailure = message => ({
  type: types.FETCH_ARTISTS_FAILURE,
  message
});

export const fetchArtists = text => async (dispatch, getState) => {
  dispatch(fetchArtistsRequest());

  try {
    const state = getState();
    const token = state.auth.token;
    const backend = process.env.REACT_APP_BACKEND_URL;

    const response = await fetch(`${backend}/search?q=${text}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const results = await response.json();

    if (results.error) {
      return dispatch(fetchArtistsFailure(results.error.message));
    }

    dispatch(fetchArtistsSuccess(results.data));
  } catch (error) {
    dispatch(fetchArtistsFailure(error.message));
  }
};

export const selectArtist = artist => ({
  type: types.SELECT_ARTIST,
  artist
});
