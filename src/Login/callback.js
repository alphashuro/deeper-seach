import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

const Callback = ({ login, location }) => {
  login(location.search);

  return <div>Logging in...</div>;
};

const mapDispatchToProps = dispatch => ({
  login: query => {
    dispatch({
      type: "LOGIN_REQUEST"
    });

    dispatch(async () => {
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/callback" + query
      );
      const token = await response.text();

      if (token) {
        dispatch({
          type: "LOGIN_SUCCESS",
          token
        });
      } else {
        dispatch(push("/login"));
      }
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Callback);
