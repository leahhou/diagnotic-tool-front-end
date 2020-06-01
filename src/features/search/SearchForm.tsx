import React, { useCallback } from "react";
import { Grid, Button, GridColumn } from "semantic-ui-react";
import RequestIdInput from "./RequestIdInput";
import EnvFilter from "./EnvFilter";
import TimeFilter from "./TimeFilter";
import SearchSummary from "./Searchsummary";

const SearchForm = ({ setAllFilters }) => {
  let [requestId, setRequestId] = React.useState("");
  let [envFilter, setEnvFilter] = React.useState("");
  let [timeFilter, setTimeFilter] = React.useState("");

  const getRequestId = id => {
    setRequestId(id);
  };
  const getEnvFilter = envOnSelect => {
    setEnvFilter(envOnSelect);
  };
  const getTimeFilter = timeOnSelect => {
    setTimeFilter(timeOnSelect);
  };

  const getAllFilters = () => {
    setAllFilters(requestId, envFilter, timeFilter);
  };

  return (
    <Grid>
      <Grid.Row stretched>
        <Grid.Column width={9}>
          <RequestIdInput setId={getRequestId} />
        </Grid.Column>
        <Grid.Column width={2}>
          <EnvFilter setEnvFilter={getEnvFilter} />
        </Grid.Column>
        <Grid.Column width={3}>
          <TimeFilter setTimeFilter={getTimeFilter} />
        </Grid.Column>
        <GridColumn width={2}>
          <Button onClick={getAllFilters} positive content="Search" />
        </GridColumn>
      </Grid.Row>
      <Grid.Row>
        {/* <SearchSummary id={requestId} env={envFilter} time={timeFilter} /> */}
        In Search Form: ---------
        {requestId}
        {envFilter}
        {timeFilter}
        ------
      </Grid.Row>
    </Grid>
  );
};

export default SearchForm;
