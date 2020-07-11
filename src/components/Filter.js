import React from "react";
import styled from "styled-components";

const ButtonClear = styled.span`
  color: hsl(180, 29%, 50%);
  font-weight: bolder;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

function Filter(props) {
  const Container = styled.div`
    visibility: ${props.hidden ? "hidden" : "visible"};
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

  return (
    <Container>
      <div>
        {props.labels.map((l) => (
          <span>{l}</span>
        ))}
      </div>
      <ButtonClear onClick={props.clear}>Clear</ButtonClear>
    </Container>
  );
}

export default Filter;
