import { types } from "./actions";

const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TEXT_CHANGE:
      return action.text;
    default:
      return state;
  }
};
