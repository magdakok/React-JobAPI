import React, { useState } from "react";
import { jobsdata } from "./../data";
import JobBox from "./JobBox";
import Filter from "./Filter";
import styled from "styled-components";
import backgroundSvgDesktop from "./../images/bg-header-desktop.svg";
import backgroundSvgMobile from "./../images/bg-header-mobile.svg";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: hsl(180, 52%, 96%);
`;

const Container = styled.div`
  padding: 52px 11%;
  position: relative;
  @media only screen and (max-width: 850px) {
    padding: 10px 6.5%;
  }
`;

const Header = styled.div`
  height: 156px;
  background-color: hsl(180, 29%, 50%);
  background-image: url(${backgroundSvgDesktop});
  background-size: cover;
  @media only screen and (max-width: 850px) {
    background-image: url(${backgroundSvgMobile});
  }
`;

function JobListingsApp() {
  const [filter, setTags] = useState([]);

  function addTags(e) {
    if (!filter.includes(e.target.innerText)) {
      setTags([...filter, e.target.innerText]);
    }
  }

  function removeTags(tag) {
    let newFilterItems = filter.filter((f) => {
      return f !== tag;
    });
    setTags(newFilterItems);
  }

  function clear() {
    setTags([]);
  }

  const renderJobs =
    filter.length === 0
      ? jobsdata.map((i) => {
          return <JobBox info={i} addTags={addTags} key={i.id} />;
        })
      : jobsdata.map((i) => {
          let technologies = [i.role, i.level, ...i.languages, ...i.tools];
          if (filter.every((item) => technologies.includes(item))) {
            return <JobBox info={i} addTags={addTags} key={i.id} />;
          }
          return null;
        });

  return (
    <MainContainer>
      <Header></Header>
      <Container>
        <Filter
          labels={filter}
          hidden={!filter.length}
          clear={clear}
          removeTags={removeTags}
        />
        {renderJobs}
      </Container>
    </MainContainer>
  );
}

export default JobListingsApp;
