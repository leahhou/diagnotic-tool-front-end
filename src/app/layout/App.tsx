import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/navbar/NavBar";
import SearchForm from "../../features/search/SearchForm";
import ResultTabs from "../../features/results/ResultTabs";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const App = () => {
  const clientParam = { uri: "/graphql" };
  const client = new ApolloClient(clientParam);

  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "6em" }}>
        <ApolloProvider client={client}>
          <SearchForm />
        </ApolloProvider>
      </Container>
      <Container style={{ marginTop: "1em" }}>
        <ResultTabs />
      </Container>
    </Fragment>
  );
};

export default App;
