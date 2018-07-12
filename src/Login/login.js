import React from "react";

export default () => (
  <div>
    <a href={`${process.env.REACT_APP_BACKEND_URL}/auth`}>Login</a>
  </div>
);
