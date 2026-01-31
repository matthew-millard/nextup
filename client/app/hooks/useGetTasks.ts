import { useQuery } from "@apollo/client/react";
import { GET_TASKS } from "~/graphql/shared/queries/get-tasks-query";

const useQueryTasks = () => {
  return useQuery(GET_TASKS);
};

export { useQueryTasks };
