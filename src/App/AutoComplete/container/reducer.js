import { types } from "./actions";
import { merge } from "ramda";

const initialState = {
  loading: false,
  show: false,
  data: [],
  selected: null,
  error: null
};

export default (state = initialState, action) => {
  const mergeState = merge(state);

  switch (action.type) {
    case types.FETCH_ARTISTS_REQUEST:
      return mergeState({ show: true, loading: true, error: "" });
    case types.FETCH_ARTISTS_SUCCESS:
      return mergeState({
        loading: false,
        data: action.artists,
        show: Boolean(action.artists.length)
      });
    case types.FETCH_ARTISTS_FAILURE:
      return mergeState({ loading: false, error: action.message });
    case types.SELECT_ARTIST:
      return mergeState({ selected: action.artist, show: false });
    default:
      return state;
  }
};
