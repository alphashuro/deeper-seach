import { connect } from "react-redux";
import Search from "../search";
import { changeText } from "./actions";

const mapStateToProps = state => ({
  text: state.deezer.text
});

const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(changeText(event.target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
