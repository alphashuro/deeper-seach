import { types } from "./actions";
import { merge } from "ramda";

export default (state, action) => {
  const mergeState = merge(state);

  switch (action.type) {
    case types.FETCH_ARTISTS_REQUEST:
      return mergeState({ loading: true, error: "" });
    case types.FETCH_ARTISTS_SUCCESS:
      return mergeState({
        loading: false,
        data: action.artists
      });
    case types.FETCH_ARTISTS_FAILURE:
      return mergeState({ loading: false, error: action.message });
    case types.SELECT_ARTIST:
      return mergeState({ selected: action.artist });
    default:
      return state;
  }
};
