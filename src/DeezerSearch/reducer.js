import { searchReducer } from "./Search";
import { artistsReducer } from "./AutoComplete";
import { albumsReducer } from "./Albums";
// import { albumDetailReducer } from "./AlbumDetail";

export default (state, action) => ({
  text: searchReducer(state.text, action),
  artists: artistsReducer(state.artists, action),
  albums: albumsReducer(state.albums, action)
  //   albumDetail: albumDetailReducer
});
