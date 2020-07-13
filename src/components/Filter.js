import React from "react";
import styled from "styled-components";
import TagButton from "./TagButton";

const ButtonClear = styled.span`
  color: hsl(180, 29%, 50%);
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media only screen and (max-width: 850px) {
    margin-left: 10px;
  }
`;

const ButtonsBox = styled.div`
  display: flex;
  @media only screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 13px 32px;
  border-radius: 7px;
  box-shadow: 5px 6px 25px -16px rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 77%;
  top: 0;
  left: 50%;
  transform: translateX(-50%) translateY(-36px);
  @media only screen and (max-width: 850px) {
    padding: 13px 15px 13px 7px;
    position: relative;
    width: 100%;
    top: 0;
    left: 0;
    transform: translateX(0) translateY(-45px);
  }
`;

function Filter(props) {
  return (
    <Container hidden={props.hidden}>
      <ButtonsBox>
        {props.labels.map((l) => (
          <TagButton
            text={l}
            key={`TB-${l}`}
            removeTags={props.removeTags}
            withCloseBtn>
            {l}
          </TagButton>
        ))}
      </ButtonsBox>
      <ButtonClear onClick={props.clear}>Clear</ButtonClear>
    </Container>
  );
}

export default Filter;
