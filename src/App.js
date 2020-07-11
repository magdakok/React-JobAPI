import React from "react";
import JobListingsApp from "./components/JobListingsApp";
import styled from "styled-components";
import backgroundSvg from "./images/bg-header-desktop.svg";

const Container = styled.div`
  min-height: 100vh;
`;

const Header = styled.div`
  height: 156px;
  background-color: hsl(180, 29%, 50%);
  background-image: url(${backgroundSvg});
  background-size: cover;
`;

function App() {
  return (
    <Container>
      <Header></Header>
      <JobListingsApp />
    </Container>
  );
}

export default App;
