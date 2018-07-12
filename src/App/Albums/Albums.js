import React from "react";
import styled from "styled-components";
import Loader from "../Loader";

const Container = styled.div`
  margin-top: 30px;
  color: #0ff;

  & .title {
    padding-bottom: 20px;
    border-bottom: 2px solid rgb(32, 32, 32);
    color: white;
  }
`;

const List = styled.section`
  list-style-type: none;
  display: flex;
  padding: 0;
  overflow-x: scroll;
  overflow-y: hidden;

  .card {
    display: inline-block;
  }

  .card::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  align-items: center;
  margin-right: 25px;
  cursor: pointer;

  & > img {
    margin-bottom: 10px;
    transition: all 0.2s;
  }

  &:hover > img {
    transform: scale(1.1);
  }
`;

export default ({ artist, loading, albums, selectAlbum }) =>
  artist && (
    <Container>
      <h2 className="title">Search results for "{artist.name}"</h2>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h3>ALBUMS</h3>
          <List>
            {albums.map(album => (
              <Item key={album.id} onClick={() => selectAlbum(album)}>
                <img src={album.cover} alt="Album Cover" />
                <span>{album.title}</span>
              </Item>
            ))}
          </List>
        </div>
      )}
    </Container>
  );
