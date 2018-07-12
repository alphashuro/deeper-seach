import React from "react";

const Loader = () => <p>Loading...</p>;

export default ({
  text = "",
  onChange,
  artistClickHandler,
  loading,
  artists
}) => (
  <div>
    <input type="text" value={text} onChange={onChange} />
    {loading ? (
      <Loader />
    ) : (
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            <a onClick={artistClickHandler(artist)}>{artist.name}</a>
          </li>
        ))}
      </ul>
    )}
  </div>
);
