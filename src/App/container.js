import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.token)
});

const mapDispatchToProps = dispatch => ({
  logout: () =>
    dispatch({
      type: "LOGOUT"
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
