import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client/react";

const ADD_TODO = gql`
  mutation AddTodo($title: String!) {
    addTodo(title: $title) {
      id
      title
      completed
    }
  }
`;

const useAddTodoMutation = () => useMutation(ADD_TODO, { refetchQueries: ["GetTasks"] });

export { useAddTodoMutation };
