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
  @media only screen and (max-width: 850px) {
    font-size: 13px;
  }
`;

const ButtonClickable = styled(Button)`
  cursor: pointer;
  &:hover {
    background-color: hsl(180, 29%, 50%);
    color: hsl(180, 52%, 96%);
  }
`;

const ButtonText = styled.div`
  padding: 7px;
`;

const ButtonDelete = styled.div`
  background-color: hsl(180, 29%, 50%);
  padding: 9px 9px 0 9px;
  cursor: pointer;
  &:hover {
    background-color: hsl(180, 14%, 20%);
  }
`;

function TagButton(props) {
  function handleDelete() {
    props.removeTags(props.text);
  }

  return props.withCloseBtn ? (
    <Button>
      <ButtonText>{props.text}</ButtonText>
      <ButtonDelete onClick={handleDelete}>
        <img src={iconRemove} alt='Remove tag icon' />
      </ButtonDelete>
    </Button>
  ) : (
    <ButtonClickable onClick={props.addTags}>
      <ButtonText>{props.text}</ButtonText>
    </ButtonClickable>
  );
}

export default TagButton;
