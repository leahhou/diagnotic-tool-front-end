import React from "react";
import { Input, Container } from "semantic-ui-react";

// export interface IProp {
//   search: (e: string) => void;
// }

const RequestIdInput = ({ setRequestId }) => {
  let [input, setInput] = React.useState("");

  const getInput = event => {
    setInput(event.target.value);
    setRequestId(event.target.value);
  };

  return <Input onChange={getInput} placeholder="enter requestId" />;
};

export default RequestIdInput;
