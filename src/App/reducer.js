import { searchReducer } from "./Search";
import { artistsReducer } from "./AutoComplete";
import { albumsReducer } from "./Albums";
import { tracksReducer } from "./Tracks";

export default (state, action) => ({
  text: searchReducer(state.text, action),
  artists: artistsReducer(state.artists, action),
  albums: albumsReducer(state.albums, action),
  tracks: tracksReducer(state.tracks, action)
});
