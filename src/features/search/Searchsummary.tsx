import React from "react";
import { IDescribeSearch } from "../../app/models/IDescribeSearch";
import { Button, Container, Divider, Transition } from "semantic-ui-react";
// export interface IProp {
//   describeSearch: string;
// }

const SearchSummary = ({ id, env, time }) => {
  let [visible, setVisible] = React.useState(false);
  let [numberOfResults, setnumberOfResults] = React.useState(0);
  let [summary, setSummary] = React.useState({
    id: "not entered",
    env: "not entered",
    time: "not entered"
  });
  const toggleSearchView = () => {
    visible ? setVisible(false) : setVisible(true);
    setSummary({ id, env, time });
  };

  return (
    <Container>
      <Button
        color="grey"
        onClick={toggleSearchView}
        content={visible ? "Hide Search Summary" : "Show Search Summary"}
      />
      <Divider hidden />
      <Transition visible={visible} duration={100}>
        <div>
          <p>
            <span className="summary">{numberOfResults}</span> results are found
            with requestId:
            <span className="summary">{summary.id}</span> in{" "}
            <span className="summary">{summary.env}</span> for{" "}
            <span className="summary">{summary.time}</span>
          </p>
        </div>
      </Transition>
    </Container>
  );
};

export default SearchSummary;
