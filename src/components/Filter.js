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

function Filter(props) {
  const Container = styled.div`
    visibility: ${props.hidden ? "hidden" : "visible"};
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 21px 41px;
    border-radius: 7px;
    box-shadow: 5px 6px 25px -16px rgba(0, 0, 0, 0.3);
    position: absolute;
    width: 76.2%;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-45px);
  `;
  return (
    <Container>
      <ButtonsBox>
        {props.labels.map((l) => (
          <TechButton
            text={l}
            key={`TB-${l}`}
            removeTags={props.removeTags}
            withCloseBtn>
            {l}
          </TechButton>
        ))}
      </ButtonsBox>
      <ButtonClear onClick={props.clear}>Clear</ButtonClear>
    </Container>
  );
}

export default Filter;
