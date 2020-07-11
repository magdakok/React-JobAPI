import React from "react";
import styled from "styled-components";

const Button = styled.div`
  background-color: hsl(180, 52%, 96%);
  color: hsl(180, 29%, 50%);
  font-weight: bolder;
  border-radius: 5px;
  padding: 9px;
  margin: 8px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: hsl(180, 52%, 96%);
  }
`;
function TechButton(props) {
  return <Button>{props.text}</Button>;
}

export default TechButton;
