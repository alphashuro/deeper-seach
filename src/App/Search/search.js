import React, { Fragment } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 500px;
  height: 20px;
  font-size: 1.3em;
  background-color: rgb(32, 32, 32);
  color: rgb(111, 111, 111);
  border: none;
  padding: 20px;
`;

const StyledButton = styled.button`
  -webkit-appearance: none;
  margin-left: 40px;
  background-color: #0ff;
  border: none;
  height: 60px;
  font-size: 1.3em;
  padding: 19px 33px;
  text-transform: uppercase;
  border-radius: 2px;
`;

export default ({ text = "", onTextChange, onSearchClick }) => (
  <div>
    <StyledInput
      placeholder="Search here"
      type="text"
      value={text}
      onChange={onTextChange}
    />
    <StyledButton onClick={() => onSearchClick(text)}>Search</StyledButton>
  </div>
);
