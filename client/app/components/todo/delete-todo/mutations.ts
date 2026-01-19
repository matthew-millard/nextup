import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

const Delete_Todo = gql`
  mutation deleteTodo($id: String!) {
    deleteTodo(id: $id) {
      id
    }
  }
`;

const useDeleteTodoMutation = () => useMutation(Delete_Todo, { refetchQueries: ["GetTasks"] });

export { useDeleteTodoMutation };
