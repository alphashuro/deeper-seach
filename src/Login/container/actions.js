import { push } from "connected-react-router";

export const types = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILED",
  LOGOUT: "LOGOUT"
};

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST
});

export const loginSuccess = token => ({
  type: types.LOGIN_SUCCESS,
  token
});

export const loginFailure = message => ({
  type: types.LOGIN_FAILURE,
  message
});

export const logout = () => ({
  type: types.LOGOUT
});

export const login = query => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + "/callback" + query
    );
    const token = await response.text();

    localStorage.setItem("token", token);

    if (token) {
      return dispatch(loginSuccess(token));
    }
  } catch (e) {
    dispatch(loginFailure(e.message));
  }

  dispatch(push("/login"));
};
