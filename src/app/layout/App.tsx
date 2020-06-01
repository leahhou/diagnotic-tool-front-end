import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/navbar/NavBar";
import SearchForm from "../../features/search/SearchForm";
import ComplianceResults from "../../features/results/ComplianceResults";
import ResultTabs from "../../features/results/ResultTabs";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const App = () => {
  let [id, setId] = React.useState("");
  let [env, setEnv] = React.useState("");
  let [time, setTime] = React.useState("");
  const clientParam = { uri: "http://localhost:5000/graphql" };
  const client = new ApolloClient(clientParam);

  const getFilters = (id, env, time) => {
    setId(id);
    setEnv(env);
    setTime(time);
  };
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "6em" }}>
        <SearchForm setAllFilters={getFilters} />
      </Container>
      <Container style={{ marginTop: "1em" }}>
        <ApolloProvider client={client}>
          <ComplianceResults id={id} env={env} time={time} />
        </ApolloProvider>
      </Container>
      {/* <Container style={{ marginTop: "1em" }}>
        <ResultTabs />
      </Container> */}
    </Fragment>
  );
};

export default App;
