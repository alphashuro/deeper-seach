import loginReducer from "./Login/container/reducer";
import searchReducer from "./Search/container/reducer";

const initialState = {
  auth: {
    loading: false,
    token: ""
  },
  search: {
    text: "",
    artists: {
      loading: false,
      data: []
    },
    artist: null,
    albums: {
      loading: false,
      data: []
    },
    album: {
      loading: false,
      data: []
    }
  }
};

const appReducer = (state = initialState, action) => ({
  auth: loginReducer(state.auth, action),
  search: searchReducer(state.search, action)
});

export default appReducer;
