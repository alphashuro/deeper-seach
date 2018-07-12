import { types } from "./actions";

export default (state, action) => {
  switch (action.type) {
    case types.TEXT_CHANGE:
      return action.text;
    default:
      return state;
  }
};
