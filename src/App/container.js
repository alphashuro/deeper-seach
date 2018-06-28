import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => ({
  loggedIn: Boolean(state.token)
});

export default connect(mapStateToProps)(App);
