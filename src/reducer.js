import loginReducer from "./Login/container/reducer";
import deezerSearchReducer from "./DeezerSearch/reducer";

const initialState = {
  auth: {
    loading: false,
    token: ""
  },
  deezer: {
    text: "",
    artists: {
      loading: false,
      data: [],
      selected: null,
      error: null
    },
    albums: {
      loading: false,
      data: [],
      selected: null,
      error: null
    },
    albumDetail: {
      loading: false,
      data: {},
      error: null
    }
  }
};

const appReducer = (state = initialState, action) => ({
  auth: loginReducer(state.auth, action),
  deezer: deezerSearchReducer(state.deezer, action)
});

export default appReducer;
