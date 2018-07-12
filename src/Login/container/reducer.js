import { merge } from "ramda";
import { types } from "./actions";

export default (state = {}, action) => {
  const mergeState = merge(state);

  switch (action.type) {
    case types.LOGIN_REQUEST:
      return mergeState({ loading: true });

    case types.LOGIN_SUCCESS:
      return mergeState({ token: action.token, loading: false });

    case types.LOGIN_FAILURE:
      return mergeState({ error: action.message, loading: false });

    case types.LOGOUT:
      return mergeState({ token: null });

    default:
      return state;
  }
};
