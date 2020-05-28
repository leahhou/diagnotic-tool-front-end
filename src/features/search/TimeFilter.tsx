import React from "react";
import { Dropdown, Container } from "semantic-ui-react";

// export interface IProp {
//   addEnv: (e: string) => void;
// }

const TimeFilter = ({ setTimeFilter }) => {
  let [time, setTime] = React.useState("");

  const getTime = (event, data) => {
    setTime(data.value);
    setTimeFilter(data.value);
  };
  return (
    <Dropdown
      compact
      onChange={getTime}
      placeholder="filter by time"
      selection
      search
      options={timeOptions}
    />
  );
};

const timeOptions = [
  { key: "", text: "", value: "" },
  { key: "Last 60 Minutes", text: "Last 60 Minutes", value: "Last 60 Minutes" },
  { key: "Last 3 Hours", text: "Last 3 Hours", value: "Last 3 Hours" },
  { key: "Last 24 Hours", text: "Last 24 Hours", value: "Last 24 Hours" },
  { key: "Today", text: "Today", value: "Today" },
  { key: "Yesterday", text: "Yesterday", value: "Yesterday" },
  { key: "Last 3 Days", text: "Last 3 Days", value: "Last 3 Days" },
  { key: "Last 14 Days", text: "Last 14 Days", value: "Last 14 Days" }
];

export default TimeFilter;
