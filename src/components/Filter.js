import React from "react";
import styled from "styled-components";
import TechButton from "./TechButton";

const ButtonClear = styled.span`
  color: hsl(180, 29%, 50%);
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonsBox = styled.div`
  display: flex;
`;

const Container = styled.div`
  ${(props) => props.hidden && "visibility: hidden;"}
  ${(props) => !props.hidden && "visibility: visible;"}
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin: 21px 7px -79px 7px;
  padding: 21px 41px;
  border-radius: 7px;
  box-shadow: 5px 6px 25px -16px rgba(0, 0, 0, 0.3);
  transform: translateY(-102px);
`;

function Filter(props) {
  return (
    <Container>
      <ButtonsBox>
        {props.labels.map((l) => (
          <TechButton text={l} id={`TB-${l}`}>
            {l}
          </TechButton>
        ))}
      </ButtonsBox>
      <ButtonClear onClick={props.clear}>Clear</ButtonClear>
    </Container>
  );
}

export default Filter;
