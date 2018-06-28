import React from "react";

export default ({ loggedIn }) => (
  <div>
    <a href={`${process.env.REACT_APP_BACKEND_URL}/auth`}>Login</a>
  </div>
);
