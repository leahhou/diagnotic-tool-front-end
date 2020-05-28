import React from "react";
import { Dropdown, Container, Input } from "semantic-ui-react";

// export interface IProp {
//   addEnv: () => void;
// }
const EnvFilter = ({ setEnvFilter }) => {
  let [env, setEnv] = React.useState("");

  const getEnv = (event, data) => {
    setEnv(data.value);
    setEnvFilter(data.value);
  };

  return (
    <Dropdown
      compact
      onChange={getEnv}
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
