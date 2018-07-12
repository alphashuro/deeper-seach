import { searchReducer } from "./Search";
import { artistsReducer } from "./AutoComplete";
import { albumsReducer } from "./Albums";
import { tracksReducer } from "./Tracks";

const initialState = {};

export default (state = initialState, action) => ({
  text: searchReducer(state.text, action),
  artists: artistsReducer(state.artists, action),
  albums: albumsReducer(state.albums, action),
  tracks: tracksReducer(state.tracks, action)
});
