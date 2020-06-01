import React from "react";
import ComplianceResults from "./ComplianceResults";
import { Tab } from "semantic-ui-react";

const panes = [
  // {
  //   menuItem: "Compliance",
  //   render: () => <ComplianceResults />
  // },
  { menuItem: "Lodgement", render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: "Form Engine", render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> }
];

const ResultTabs = () => <Tab panes={panes} />;

export default ResultTabs;
