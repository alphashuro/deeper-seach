import React, { Component } from "react";

class Callback extends Component {
  componentDidMount() {
    this.props.login();
  }

  render() {
    return <div>Logging in...</div>;
  }
}

export default Callback;
