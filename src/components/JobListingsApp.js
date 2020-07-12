import React, { useState } from "react";
import { jobsdata } from "./../data";
import JobBox from "./JobBox";
import Filter from "./Filter";
import styled from "styled-components";
import backgroundSvg from "./../images/bg-header-desktop.svg";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: hsl(180, 52%, 96%);
`;

const Container = styled.div`
  padding: 52px 11.4%;
  position: relative;
`;

const Header = styled.div`
  height: 156px;
  background-color: hsl(180, 29%, 50%);
  background-image: url(${backgroundSvg});
  background-size: cover;
`;

function JobListingsApp() {
  const [filter, setFilter] = useState([]);

  function addFilter(e) {
    if (!filter.includes(e.target.innerText)) {
      setFilter([...filter, e.target.innerText]);
    }
  }

  function removeFilter(e) {
    let newFilterItems = filter.filter((f) => {
      return f !== e.target.parentElement.parentElement.innerText;
    });
    setFilter(newFilterItems);
  }

  function clear() {
    setFilter([]);
  }

  const renderJobs =
    filter.length === 0
      ? jobsdata.map((i) => {
          return <JobBox info={i} addFilter={addFilter} key={i.id} />;
        })
      : jobsdata.map((i) => {
          let technologies = [i.role, i.level, ...i.languages, ...i.tools];
          if (filter.every((item) => technologies.includes(item))) {
            return <JobBox info={i} addFilter={addFilter} key={i.id} />;
          }
        });

  return (
    <MainContainer>
      <Header></Header>
      <Container>
        <Filter
          labels={filter}
          hidden={!filter.length}
          clear={clear}
          removeFilter={removeFilter}
        />
        {renderJobs}
      </Container>
    </MainContainer>
  );
}

export default JobListingsApp;
