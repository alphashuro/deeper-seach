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

const AutoComplete = ({ loading, artists = [], selectArtist, error }) => {
  if (error) return error;

  if (!loading && !artists.length) return null;

  return (
    <StyledTooltip>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <p>Search results</p>
          <ul>
            {artists.map(artist => (
              <li key={artist.id}>
                <a onClick={() => selectArtist(artist)}>{artist.name}</a>
              </li>
            ))}
          </ul>
        </React.Fragment>
      )}
    </StyledTooltip>
  );
};

export default AutoComplete;
