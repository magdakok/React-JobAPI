import React, { useState } from "react";
import { jobsdata } from "./../data";
import JobBox from "./JobBox";
import styled from "styled-components";

const Container = styled.div`
  padding: 52px 11.4%;
  background-color: hsl(180, 52%, 96%);
`;

function JobListingsApp() {
  const [filter, setFilter] = useState([]);

  const renderJobs =
    filter.length === 0 ? (
      jobsdata.map((i) => {
        return <JobBox info={i} />;
      })
    ) : (
      <div>some, run script maybe</div>
    );

  return <Container>{renderJobs}</Container>;
}

export default JobListingsApp;
