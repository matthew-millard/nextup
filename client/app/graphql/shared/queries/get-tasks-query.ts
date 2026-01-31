import { gql, type TypedDocumentNode } from "@apollo/client";
import type { GetTasksQuery, GetTasksQueryVariables } from "~/graphql/types/__generated__/graphql";

const GET_TASKS: TypedDocumentNode<GetTasksQuery, GetTasksQueryVariables> = gql`
  query GetTasks {
    tasks {
      id
      title
      description
      completed
    }
  }
`;

export { GET_TASKS };
