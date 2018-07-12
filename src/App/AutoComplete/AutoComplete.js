import React from "react";

const Loader = () => <p>Loading...</p>;

export default ({ loading, artists = [], selectArtist, error }) =>
  loading ? (
    <Loader />
  ) : error ? (
    error
  ) : (
    <ul>
      {artists.map(artist => (
        <li key={artist.id}>
          <a onClick={() => selectArtist(artist)}>{artist.name}</a>
        </li>
      ))}
    </ul>
  );
