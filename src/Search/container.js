import { connect } from "react-redux";
import Search from "./search";

const mapStateToProps = state => ({
  text: state.search
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(async () => {
      dispatch({
        type: "SEARCH_CHANGED",
        text: event.target.value
      });

      const data = await fetch("https://api.deezer.com/search/artist?q=eminem");
      console.log(data);
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
