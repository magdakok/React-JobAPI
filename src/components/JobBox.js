import React from "react";
import styled from "styled-components";
import TagButton from "./TagButton";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin: 22px 7px;
  padding: 31px 0;
  border-radius: 7px;
  box-shadow: 5px 6px 25px -16px rgba(0, 0, 0, 0.3);
  position: relative;
  @media only screen and (max-width: 850px) {
    flex-direction: column;
    margin: 4px 0 40px 0;
    padding: 34px 23px 21px 23px;
    align-items: flex-start;
  }

  &::before {
    content: "";
    ${(props) => (props.featured ? "display: block;" : "display:none;")}
    position: absolute;
    height: 100%;
    width: 5px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    background-color: hsl(180, 29%, 50%);
    left: 0;
    top: 0;
  }
`;

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
  margin: 0 24px 0 40px;
  @media only screen and (max-width: 850px) {
    margin: 0;
    position: absolute;
    top: -24px;
    left: 24px;
    width: 48px;
    height: 48px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const TechnologiesBox = styled.div`
  margin-left: auto;
  margin-right: 30px;
  display: flex;
  @media only screen and (max-width: 1320px) {
    flex-wrap: wrap;
    margin-left: 50px;
  }
  @media only screen and (max-width: 850px) {
    margin: 0;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 1320px) {
    margin-right: auto;
  }
  @media only screen and (max-width: 850px) {
    width: 100%;
    margin-right: 0;
    border-bottom: 1px solid rgba(123, 142, 142, 0.5);
    padding-bottom: 21px;
    margin-bottom: 9px;
  }
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
  @media only screen and (max-width: 850px) {
    margin-right: 11px;
  }
`;

const Position = styled.div`
  font-weight: bolder;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: hsl(180, 29%, 50%);
  }
  @media only screen and (max-width: 850px) {
    font-size: 15px;
  }
`;

const InfoBottom = styled.div`
  margin-top: 12px;
  display: flex;
  color: hsl(180, 8%, 52%);
  font-size: 15px;
  white-space: nowrap;
  & > *:not(:first-child)::before {
    content: "•";
    transform: scale(2);
    display: inline-block;
    margin: 0 15px;
    @media only screen and (max-width: 850px) {
      margin: 0 7px;
    }
  }
  @media only screen and (max-width: 850px) {
    font-size: 13px;
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
