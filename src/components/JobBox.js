import React from "react";
import styled from "styled-components";
import TagButton from "./TagButton";

const Label = styled.div`
  display: inline-block;
  padding: 8px 10px 4px 10px;
  border-radius: 20px;
  margin: 0 3px;
  text-transform: uppercase;
  font-weight: bolder;
  line-height: 10px;
  font-size: 10px;
  color: white;
`;

const LabelNew = styled(Label)`
  background-color: hsl(180, 29%, 50%);
`;

const LabelFeatured = styled(Label)`
  background-color: hsl(180, 14%, 20%);
`;

const LogoBox = styled.div`
  margin: 32px 25px 32px 32px;
`;

const TechnologiesBox = styled.div`
  margin-left: auto;
  margin-right: 16px;
  display: flex;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;
const Company = styled.span`
  font-weight: bolder;
  color: hsl(180, 29%, 50%);
  margin-right: 15px;
`;

const Position = styled.div`
  font-weight: bolder;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    color: hsl(180, 29%, 50%);
  }
`;

const InfoBottom = styled.div`
  margin-top: 12px;
  display: flex;
  color: hsl(180, 8%, 52%);
  font-size: 12px;
  & > *:not(:first-child)::before {
    content: "•";
    display: inline-block;
    margin: 0 15px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin: 21px 7px;
  border-radius: 7px;
  box-shadow: 5px 6px 25px -16px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  &::before {
    content: "";
    ${(props) => props.featured && "display: block;"}
    position: absolute;
    height: 100%;
    width: 5px;
    background-color: hsl(180, 29%, 50%);
    left: 0;
    top: 0;
  }
`;

function JobBox(props) {
  const logo = require(`./../images/${props.info.logo}`);
  const technologies = [
    props.info.role,
    props.info.level,
    ...props.info.languages,
    ...props.info.tools,
  ];
  return (
    <Container featured={props.info.featured}>
      <LogoBox>
        <img src={logo} alt={`Logo of ${props.info.company}`} />
      </LogoBox>
      <InfoBox>
        <InfoTop>
          <Company>{props.info.company}</Company>
          {props.info.new && <LabelNew>New!</LabelNew>}
          {props.info.featured && <LabelFeatured>Featured</LabelFeatured>}
        </InfoTop>
        <Position>{props.info.position}</Position>
        <InfoBottom>
          <span className='added'>{props.info.postedAt}</span>
          <span className='type'>{props.info.contract}</span>
          <span className='location'>{props.info.location}</span>
        </InfoBottom>
      </InfoBox>
      <TechnologiesBox>
        {technologies.map((t) => (
          <TagButton text={t} addTags={props.addTags} key={t} />
        ))}
      </TechnologiesBox>
    </Container>
  );
}

export default JobBox;
