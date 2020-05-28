import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/navbar/NavBar";
import SearchForm from "../../features/search/SearchForm";
import ResultTabs from "../../features/results/ResultTabs";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "6em" }}>
        <SearchForm />
      </Container>
      <Container style={{ marginTop: "1em" }}>
        <ResultTabs />
      </Container>
    </Fragment>
  );
};

export default App;
