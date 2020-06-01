import React from "react";
import { Dropdown, Container, Input } from "semantic-ui-react";

// export interface IProp {
//   addEnv: () => void;
// }

const EnvFilter = ({ setEnvFilter }) => {
  return (
    <Dropdown
      compact
      onChange={(event, data) => setEnvFilter(data.value)}
      placeholder="environment"
      selection
      options={envOptions}
    />
  );
};

const envOptions = [
  { key: "", text: "", value: "" },
  { key: "ALL", text: "ALL", value: "ALL" },
  { key: "SIT", text: "SIT", value: "SIT" },
  { key: "PROD", text: "PROD", value: "PROD" }
];
export default EnvFilter;
