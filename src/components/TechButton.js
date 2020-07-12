import React from "react";
import styled from "styled-components";
import iconRemove from "./../images/icon-remove.svg";

const Button = styled.div`
  background-color: hsl(180, 52%, 96%);
  color: hsl(180, 29%, 50%);
  font-weight: bolder;
  border-radius: 5px;
  margin: 8px;
  transition: all 0.2s;
  overflow: hidden;
  display: flex;
`;

const ButtonClickable = styled(Button)`
  cursor: pointer;
  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: hsl(180, 52%, 96%);
  }
`;

const ButtonText = styled.div`
  padding: 9px;
`;

const ButtonDelete = styled.div`
  background-color: hsl(180, 29%, 50%);
  padding: 9px 9px 0 9px;
  cursor: pointer;
  &:hover {
    background-color: hsl(180, 14%, 20%);
  }
`;

function TechButton(props) {
  return props.withCloseBtn ? (
    <Button>
      <ButtonText>{props.text}</ButtonText>
      <ButtonDelete onClick={props.removeFilter}>
        <img src={iconRemove} alt='Remove tag icon' />
      </ButtonDelete>
    </Button>
  ) : (
    <ButtonClickable onClick={props.addFilter}>
      <ButtonText>{props.text}</ButtonText>
    </ButtonClickable>
  );
}

export default TechButton;
