import React from "react";
import Loader from "../Loader";
import styled from "styled-components";

const StyledTooltip = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  background-color: rgb(32, 32, 32);
  padding-top: 10px;
  padding-left: 24px;
  position: relative;
  color: rgb(111, 111, 111);
  font-size: 1.1em;

  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 13%;
    transform: translateX(-50%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 13px solid rgb(32, 32, 32);
    z-index: 100;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin-top: 14px;
`;

const Item = styled.li`
  padding: 13px;
  padding-left: 25px;
  border-bottom: 2px solid rgb(28, 28, 28);
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 25px;

  &:hover {
    color: #ccc;
  }
`;

const AutoComplete = ({ loading, artists = [], selectArtist, error }) => {
  if (error) return null;

  if (!loading && !artists.length) return null;

  return (
    <StyledTooltip>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <p>Search results</p>
          <List>
            {artists.map(artist => (
              <Item key={artist.id} onClick={() => selectArtist(artist)}>
                {artist.name}
              </Item>
            ))}
          </List>
        </React.Fragment>
      )}
    </StyledTooltip>
  );
};

export default AutoComplete;
