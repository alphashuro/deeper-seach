import { types } from "./actions";
import { merge } from "ramda";

export default (state, action) => {
  const mergeState = merge(state);

  switch (action.type) {
    case types.FETCH_TRACKS_REQUEST:
      return mergeState({ loading: true });
    case types.FETCH_TRACKS_SUCCESS:
      return mergeState({
        loading: false,
        data: action.tracks
      });
    case types.FETCH_TRACKS_FAILURE:
      return mergeState({ loading: false, error: action.message });
    default:
      return state;
  }
};
