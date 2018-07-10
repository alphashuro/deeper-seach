import { connect } from "react-redux";
import Search from "./search";

const mapStateToProps = state => ({
  text: state.search
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(async () => {
      const text = event.target.value;
      dispatch({
        type: "SEARCH_CHANGED",
        text
      });

      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/search?${text}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`
          }
        }
      );
      const body = await response.json();

      console.log(body);
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
