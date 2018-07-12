import { types } from "./actions";
import { merge } from "ramda";

export default (state, action) => {
  const mergeState = merge(state);

  switch (action.type) {
    case types.TEXT_CHANGE:
      return mergeState({ text: action.text });
    case types.FETCH_ARTISTS_REQUEST:
      return mergeState({ artists: { loading: true } });
    case types.FETCH_ARTISTS_SUCCESS:
      return mergeState({
        artists: { loading: false, data: action.artists }
      });
    case types.FETCH_ARTISTS_FAILURE:
      return mergeState({ artists: { loading: false, error: action.message } });
    default:
      return state;
  }
};
