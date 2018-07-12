import React from "react";
import styled from "styled-components";
import Loader from "../Loader";

const Container = styled.div`
  position: relative;

  img {
    position: absolute;
  }

  h3 {
    color: #0ff;
    padding-left: 160px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody {
    background-color: rgb(32, 32, 32);
  }

  td,
  th {
    padding: 0;
  }

  th {
    text-align: left;
  }

  tr {
    height: 40px;
  }

  td {
    border-bottom: 2px solid #1a1a1ae6;
  }
`;

export default ({ loading, album, tracks }) =>
  album && (
    <Container>
      <img src={album.cover} alt="Album Cover" height={150} width={150} />
      <div style={{ marginLeft: "10px", width: "100%" }}>
        <h3>{album.title}</h3>
        {loading ? (
          <Loader />
        ) : (
          <Table>
            <thead>
              <tr>
                <th style={{ width: "150px" }} />
                <th>#</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Time</th>
                <th>Released</th>
              </tr>
            </thead>
            <tbody>
              {tracks.map(track => (
                <tr key={track.id}>
                  <td style={{ borderBottom: "none" }} />
                  <td style={{ borderBottom: "none" }}>
                    {track.track_position}
                  </td>
                  <td>{track.title}</td>
                  <td>{track.artist.name}</td>
                  <td>{track.duration}</td>
                  <td>{album.release_date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </Container>
  );
