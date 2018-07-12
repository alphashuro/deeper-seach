import React from "react";
import Search from "./Search";
import AutoComplete from "./AutoComplete";
import Albums from "./Albums";
import Tracks from "./Tracks";
import { hot } from "react-hot-loader";
import styled from "styled-components";

const StyledApp = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
`;

const App = () => (
  <StyledApp>
    <Search />
    <AutoComplete />
    <Albums />
    <Tracks />
  </StyledApp>
);

export default hot(module)(App);
