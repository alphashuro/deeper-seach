const { without } = require("ramda");

export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.token);

      return {
        ...state,
        token: action.token
      };

    case "LOGOUT":
      localStorage.removeItem("token");

      return without("token")(state);

    case "SEARCH_CHANGED":
      return {
        ...state,
        search: action.tex
      };

    default:
      return state;
  }
};
