import { connect } from "react-redux";
import Search from "../search";
import { changeText } from "./actions";
import { fetchArtists } from "../../AutoComplete/container/actions";

const mapStateToProps = state => ({
  text: state
});

const mapDispatchToProps = dispatch => ({
  onTextChange: event => dispatch(changeText(event.target.value)),
  onSearchClick: text => dispatch(fetchArtists(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
