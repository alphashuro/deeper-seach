import React from "react";

export default ({ artist, loading, albums, onClickAlbum }) =>
  artist && (
    <div>
      <p>{artist.name}'s albums</p>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>{albums.map(album => <li key={album.id}>{album.title}</li>)}</ul>
      )}
    </div>
  );
