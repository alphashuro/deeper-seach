import React from "react";
import styled from "styled-components";

const Loader = styled.div`
  height: 20px;
  width: 21px;
  margin: 30px;
  margin-bottom: 43px;
  transform: rotate(180deg);

  &:before,
  &:after,
  & > i {
    float: left;
    width: 5px;
    height: 20px;
    background: #0ff;
    margin-left: 3px;
    content: "";
  }
  &:before {
    margin-left: 0;
  }

  &:before {
    animation: bounce-3 1s infinite linear;
  }
  & > i {
    animation: bounce-2 1s infinite linear;
  }
  &:after {
    animation: bounce-1 1s infinite linear;
  }
  @keyframes bounce-1 {
    0% {
      height: 1px;
    }
    16.7% {
      height: 20px;
    }
    33.4% {
      height: 20px;
    }
    100% {
      height: 1px;
    }
  }
  @keyframes bounce-2 {
    0% {
      height: 1px;
    }
    16.7% {
      height: 1px;
    }
    33.4% {
      height: 20px;
    }
    50% {
      height: 20px;
    }
    100% {
      height: 1px;
    }
  }
  @keyframes bounce-3 {
    0% {
      height: 1px;
    }
    33.4% {
      height: 1px;
    }
    50% {
      height: 20px;
    }
    66.7% {
      height: 20px;
    }
    100% {
      height: 1px;
    }
  }
`;

export default () => (
  <div style={{ display: "flex" }}>
    <Loader>
      <i />
    </Loader>
  </div>
);
