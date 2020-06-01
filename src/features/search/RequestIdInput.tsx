import React from "react";
import { Input, Container } from "semantic-ui-react";

// export interface IProp {
//   search: (e: string) => void;
// }

const RequestIdInput = ({ setId }) => {
  const getRequestId = (event, data) => {
    setId(data.value);
  };
  return <Input onChange={getRequestId} placeholder="enter requestId" />;
};

export default RequestIdInput;
