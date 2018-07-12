import React from "react";

export default ({ loading, album, tracks }) =>
  album && (
    <div>
      <h3>{album.title}</h3>
      <img src={album.cover} alt="Album Cover" />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Titlse</th>
              <th>Artist</th>
              <th>Time</th>
              <th>Released</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map(track => (
              <tr key={track.id}>
                <td>{track.track_position}</td>
                <td>{track.title}</td>
                <td>{track.artist.name}</td>
                <td>{track.duration}</td>
                <td>{album.release_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
