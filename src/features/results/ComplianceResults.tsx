import React, { useCallback, useState } from "react";
import { Item, Tab } from "semantic-ui-react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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

// const mutation = gql`
//    mutation ($id: String!){
//     {
//       compliance(requestId: $id, environment: "Test1", createDate: "Date1") {
//         requestId
//         environment
//         createDate
//         clientId
//         tenantId
//         details
//       }
//     }
//   }
// `;

const ComplianceResults = ({ id, env, time }) => {
  const runningQuery = useQuery(query, { variables: { requestId: id } });
  // const [isSending, setIsSending] = useState(false);
  // const [myMutation] = useMutation(mutation);
  // const [complianceFromMutation, setcomplianceFromMutation] = useState(null);
  // const sendRequest = useCallback(async id => {
  //   if (isSending) return;
  //   setIsSending(true);
  //   let result = await myMutation({ variables: { requestId: id } });
  //   setIsSending(false);
  //   setcomplianceFromMutation(result.data.addBookToAuthor);
  // }, []);

  let compliance = runningQuery.data && runningQuery.data.compliance;

  return runningQuery.error ? (
    <Tab.Pane>
      Error in GraphQL query :
      <pre>{JSON.stringify(runningQuery.error, null, 2)}</pre>
    </Tab.Pane>
  ) : !compliance ? (
    <Tab.Pane>loading...</Tab.Pane>
  ) : (
    <Tab.Pane>
      In Result-------
      {id} {env} {time}------
      <Item.Group divided>
        <Item>
          <Item.Image size="tiny" src="/images/wireframe/image.png" />
          <Item.Content>
            {/* <Item.Header as="a">requestId: {result.requestId}</Item.Header> */}
            <Item.Description>
              requestId: {compliance.requestId}
            </Item.Description>
            <Item.Description>
              environment: {compliance.environment}
            </Item.Description>
            <Item.Description>clientId: {compliance.clientId}</Item.Description>
            <Item.Description>tenantId: {compliance.tenantId}</Item.Description>
            <Item.Description>
              createdDate: {compliance.createDate}
            </Item.Description>
            <Item.Description>details: {compliance.details}</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Tab.Pane>
  );

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

export default ComplianceResults;
