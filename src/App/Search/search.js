import React from "react";
import styled from "styled-components";
import AutoComplete from "../AutoComplete";

const InputContainer = styled.div`
  width: 100%;
`;

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 20px;
  font-size: 1.3em;
  background-color: rgb(32, 32, 32);
  color: rgb(111, 111, 111);
  border: none;
  padding: 30px;
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
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #0ffc;
  }
`;

const SearchContainer = styled.div`
  display: flex;
`;

export default ({ text = "", onTextChange, onSearchClick }) => (
  <SearchContainer>
    <InputContainer>
      <StyledInput
        placeholder="Search here"
        type="text"
        value={text}
        onChange={onTextChange}
      />
      <AutoComplete />
    </InputContainer>
    <StyledButton onClick={() => onSearchClick(text)}>Search</StyledButton>
  </SearchContainer>
);
