import React, { useState } from "react";
import { jobsdata } from "./../data";
import JobBox from "./JobBox";

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

  return <div className='JobListingsApp'>{renderJobs}</div>;
}

export default JobListingsApp;
