import React from "react";

export default ({ loading, album, tracks }) =>
  album && (
    <div>
      <h3>{album.title}</h3>
      <img src={album.cover} alt="Album Cover" />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {tracks.map(track => (
            <li key={track.id}>
              <p>{track.title}</p>
              <p>{track.artist.name}</p>
              <p>{track.duration}</p>
              <p>{album.release_date}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
