import React from "react";
import styled from "styled-components";

function JobBox(props) {
  const logo = require(`./../images/${props.info.logo}`);

  return (
    <div className='JobBox'>
      <div className='JobBox__logo'>
        <img src={logo} />
      </div>
      <div className='JobBox__info'>
        <div className='JobBox__info-top'>
          <span className='company'>Company</span>
          <span className='label__new'>NEW</span>
          <span className='label__featured'>FEATURED</span>
        </div>
        <div className='JobBox__info-position'>Position</div>
        <div className='JobBox__info-bottom'>
          <span className='added'>1 day ago</span>
          <span className='type'>Full Time</span>
          <span className='location'>UK only</span>
        </div>
      </div>
      <div className='JobBox__technologies'>
        <span className='technology'>Frontend</span>
        <span className='technology'>Senior</span>
        <span className='technology'>HTML</span>
      </div>
    </div>
  );
}

export default JobBox;
