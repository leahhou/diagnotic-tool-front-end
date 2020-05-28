import React from "react";
import { Item, Tab } from "semantic-ui-react";
const complianceJson = [
  {
    requestId: "xxxxxx",
    clientId: "xxxxxx",
    tenantId: "xxxxxx",
    createdDate: "xxxxxx",
    details: "xxxxxx"
  },
  {
    requestId: "xxxxxx",
    clientId: "xxxxxx",
    tenantId: "xxxxxx",
    createdDate: "xxxxxx",
    details: "xxxxxx"
  },
  {
    requestId: "xxxxxx",
    clientId: "xxxxxx",
    tenantId: "xxxxxx",
    createdDate: "xxxxxx",
    details: "xxxxxx"
  }
];

const ComplianceResults = () => {
  let [results, setResult] = React.useState(complianceJson);
  return (
    <Tab.Pane>
      <Item.Group divided>
        {results.map(result => (
          <Item>
            <Item.Image size="tiny" src="/images/wireframe/image.png" />
            <Item.Content>
              {/* <Item.Header as="a">requestId: {result.requestId}</Item.Header> */}
              <Item.Description>requestId: {result.requestId}</Item.Description>
              <Item.Description>clientId: {result.clientId}</Item.Description>
              <Item.Description>tenantId: {result.tenantId}</Item.Description>
              <Item.Description>
                createdDate: {result.createdDate}
              </Item.Description>
              <Item.Description>details: {result.details}</Item.Description>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Tab.Pane>
  );
};

// const ComplianceResults = () => (
// <Item.Group divided>
//   <Item>
//     <Item.Image size="tiny" src="images/placeholder.png" />
//     <Item.Content verticalAlign="middle">
//       <Item.Description>Content A</Item.Description>
//     </Item.Content>
//   </Item>
// </Item.Group>
// );

export default ComplianceResults;
