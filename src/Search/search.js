import React from "react";

const Loader = () => <p>Loading...</p>;

const AutoComplete = ({ artists = [], onArtistClick }) => (
  <ul>
    {artists.map(artist => (
      <li key={artist.id}>
        <a onClick={() => onArtistClick({ artist })}>{artist.name}</a>
      </li>
    ))}
  </ul>
);

export default ({ text = "", onChange, loading, artists }) => (
  <div>
    <input type="text" value={text} onChange={onChange} />
    {loading ? <Loader /> : <AutoComplete artists={artists} />}
  </div>
);
