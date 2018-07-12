import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.auth.token)
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    localStorage.removeItem("token");

    dispatch({
      type: "LOGOUT"
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
