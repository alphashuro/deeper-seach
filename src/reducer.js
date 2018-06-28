module.exports = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.token = action.token;

      return {
        ...state,
        token: action.token
      };
    case "SEARCH_CHANGED":
      return {
        ...state,
        search: action.tex
      };
    default:
      return state;
  }
};
