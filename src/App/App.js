import React from "react";
import Search from "./Search";
import AutoComplete from "./AutoComplete";
import Albums from "./Albums";
import Tracks from "./Tracks";
import { hot } from "react-hot-loader";

const App = () => (
  <div>
    <Search />
    <AutoComplete />
    <Albums />
    <Tracks />
  </div>
);

export default hot(module)(App);
