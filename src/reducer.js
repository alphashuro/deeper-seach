import appReducer from "./App/reducer";

const initialState = {
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
    tracks: {
      loading: false,
      data: [],
      error: null
    }
  }
};

export default (state = initialState, action) => ({
  deezer: appReducer(state.deezer, action)
});
