import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/navbar/NavBar";
import SearchForm from "../../features/search/SearchForm";
import ComplianceResults from "../../features/results/ComplianceResults";
import ResultTabs from "../../features/results/ResultTabs";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { all } from "q";

const App = () => {
  let [id, setId] = React.useState("");
  let [env, setEnv] = React.useState("");
  let [time, setTime] = React.useState("");
  const clientParam = { uri: "/graphql" };
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
        <ApolloProvider client={client}>
          <SearchForm setAllFilters={getFilters} />
        </ApolloProvider>
      </Container>
      In App: ---------
      {id}
      {env}
      {time} -------
      <Container style={{ marginTop: "1em" }}>
        <ComplianceResults id={id} env={env} time={time} />
      </Container>
      <Container style={{ marginTop: "1em" }}>
        <ResultTabs />
      </Container>
    </Fragment>
  );
};

export default App;
