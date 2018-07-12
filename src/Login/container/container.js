import { connect } from "react-redux";
import { login } from "./actions";
import { compose } from "ramda";
import Callback from "../callback";

const mapStateToProps = state => ({
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  login: compose(
    dispatch,
    login
  )
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  login: () => dispatchProps.login(ownProps.location.search)
});

const ConnectedCallback = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Callback);

export { ConnectedCallback };
