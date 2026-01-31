import { gql, type TypedDocumentNode } from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import type {
  DeleteTasksMutation,
  DeleteTasksMutationVariables,
} from "~/graphql/types/__generated__/graphql";

const DELETE_TASKS: TypedDocumentNode<DeleteTasksMutation, DeleteTasksMutationVariables> = gql`
  mutation DeleteTasks($ids: [ID!]!) {
    deleteTasks(ids: $ids) {
      id
    }
  }
`;

const useDeleteTasks = () => {
  return useMutation(DELETE_TASKS);
};

export { useDeleteTasks };
