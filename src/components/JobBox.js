import React from "react";
import styled from "styled-components";
import TechButton from "./TechButton";

const Container = styled.div`
  display: flex;
`;

const Label = styled.div`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 0 3px;
`;

const LabelNew = styled(Label)`
  background-color: blue;
`;

const LabelFeatured = styled(Label)`
  background-color: ${(props) => (props.primary ? "green" : "yellow")};
`;

function JobBox(props) {
  const logo = require(`./../images/${props.info.logo}`);
  const technologies = [
    props.info.role,
    props.info.level,
    ...props.info.languages,
    ...props.info.tools,
  ];
  console.log(technologies);
  return (
    <Container>
      <div className='JobBox__logo'>
        <img src={logo} />
      </div>
      <div className='JobBox__info'>
        <div className='JobBox__info-top'>
          <span className='company'>{props.info.company}</span>
          {props.info.new && <LabelNew>New</LabelNew>}
          {props.info.featured && <LabelFeatured>Featured</LabelFeatured>}
        </div>
        <div className='JobBox__info-position'>{props.info.position}</div>
        <div className='JobBox__info-bottom'>
          <span className='added'>{props.info.postedAt}</span>
          <span className='type'>{props.info.contract}</span>
          <span className='location'>{props.info.location}</span>
        </div>
      </div>
      <div className='JobBox__technologies'>
        {technologies.map((t) => (
          <TechButton text={t} />
        ))}
      </div>
    </Container>
  );
}

export default JobBox;
