import React, { useCallback } from "react";
import { Item, Tab } from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// const query = gql`
//   {
//     compliance(requestId: "Name1", environment: "Test1") {
//       environment
//       clientId
//       tenantId
//       createDate
//       details
//     }
//   }
// `;

const query = gql`
  {
    compliance(requestId: "Name1", environment: "Test1", createDate: "Date1") {
      requestId
      environment
      createDate
      clientId
      tenantId
      details
    }
  }
`;

const ComplianceResults = ({ id, env, time }) => {
  // let [results, setResult] = React.useState(complianceJson);
  const runningQuery = useQuery(query);
  let compliance = runningQuery.data && runningQuery.data.compliance;

  return runningQuery.error ? (
    <div>
      Error in GraphQL query :
      <pre>{JSON.stringify(runningQuery.error, null, 2)}</pre>
    </div>
  ) : !compliance ? (
    <div>loading...</div>
  ) : (
    <div>
      Data: {compliance.requestId}
      {compliance.environment}
      {compliance.createDate}
      {compliance.clientId}
      {compliance.tenantId}
      {compliance.details}
    </div>
  );

  // return runningQuery.error ? (
  //   <div>
  //     Error in GraphQL query :{" "}
  //     <pre>{JSON.stringify(runningQuery.error, null, 2)}</pre>
  //   </div>
  // ) : !author ? (
  //   <div>loading...</div>
  // ) : (
  //   <div>
  //     Data: {author.name}
  //     {/* <ul>
  //       {author.books.map(book => (
  //         <li>{book.name}</li>
  //       ))}
  //     </ul> */}
  //   </div>
  // );

  // return (
  //   <Tab.Pane>
  //     In Result-------
  //     {id} {env} {time}------
  //     <Item.Group divided>
  //       {results.map(result => (
  //         <Item>
  //           <Item.Image size="tiny" src="/images/wireframe/image.png" />
  //           <Item.Content>
  //             {/* <Item.Header as="a">requestId: {result.requestId}</Item.Header> */}
  //             <Item.Description>requestId: {result.requestId}</Item.Description>
  //             <Item.Description>clientId: {result.clientId}</Item.Description>
  //             <Item.Description>tenantId: {result.tenantId}</Item.Description>
  //             <Item.Description>
  //               createdDate: {result.createdDate}
  //             </Item.Description>
  //             <Item.Description>details: {result.details}</Item.Description>
  //           </Item.Content>
  //         </Item>
  //       ))}
  //     </Item.Group>
  //   </Tab.Pane>
  // );
};

// const complianceJson = [
//   {
//     requestId: "xxxxxx",
//     clientId: "xxxxxx",
//     tenantId: "xxxxxx",
//     createdDate: "xxxxxx",
//     details: "xxxxxx"
//   },
//   {
//     requestId: "xxxxxx",
//     clientId: "xxxxxx",
//     tenantId: "xxxxxx",
//     createdDate: "xxxxxx",
//     details: "xxxxxx"
//   },
//   {
//     requestId: "xxxxxx",
//     clientId: "xxxxxx",
//     tenantId: "xxxxxx",
//     createdDate: "xxxxxx",
//     details: "xxxxxx"
//   }
// ];

export default ComplianceResults;
