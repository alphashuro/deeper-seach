import React from "react";
import Search from "./Search";

import Albums from "./Albums";
import Tracks from "./Tracks";
import { hot } from "react-hot-loader";
import styled from "styled-components";

const StyledApp = styled.div`
  margin: 50px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 50%;

  & > * {
    width: 100%;
  }
`;

const App = () => (
  <StyledApp>
    <Container>
      <Search />
      <Albums />
      <Tracks />
    </Container>
  </StyledApp>
);

export default hot(module)(App);
