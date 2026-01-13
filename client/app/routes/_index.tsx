import { gql } from "@apollo/client";
import type { Route } from "./+types/_index";
import { useQuery } from "@apollo/client/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      completed
    }
  }
`;

export default function Index() {
  const { data, error, loading } = useQuery(GET_TASKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Errors: {error.message}</p>;

  const renderTasks = () => {
    return data?.tasks?.map((task) => {
      <div key={task.id}>
        {task.title}: {task.completed}
      </div>;
    });
  };

  return (
    <div>
      <h1>Tasks</h1>
      {renderTasks()}
    </div>
  );
}
