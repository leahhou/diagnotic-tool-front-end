import React from "react";
import { Grid, Button, GridColumn } from "semantic-ui-react";
import RequestIdInput from "./RequestIdInput";
import EnvFilter from "./EnvFilter";
import TimeFilter from "./TimeFilter";
import SearchSummary from "./Searchsummary";

const SearchForm = () => {
  let [requestId, setRequestId] = React.useState("");
  let [envFilter, setEnvFilter] = React.useState("");
  let [timeFilter, setTimeFilter] = React.useState("");

  const getRequestId = requestId => {
    setRequestId(requestId);
  };
  const getEnvFilter = envOnSelect => {
    setEnvFilter(envOnSelect);
  };
  const getTimeFilter = timeOnSelect => {
    setTimeFilter(timeOnSelect);
  };

  const search = () => {
    //doing the api call
    console.log(requestId, envFilter, timeFilter);
  };

  return (
    <Grid>
      <Grid.Row stretched>
        <Grid.Column width={9}>
          <RequestIdInput setRequestId={getRequestId} />
        </Grid.Column>
        <Grid.Column width={2}>
          <EnvFilter setEnvFilter={getEnvFilter} />
        </Grid.Column>
        <Grid.Column width={3}>
          <TimeFilter setTimeFilter={getTimeFilter} />
        </Grid.Column>
        <GridColumn width={2}>
          <Button onClick={search} positive content="Search" />
        </GridColumn>
      </Grid.Row>
      <Grid.Row>
        <SearchSummary id={requestId} env={envFilter} time={timeFilter} />
      </Grid.Row>
    </Grid>
  );
};

export default SearchForm;
