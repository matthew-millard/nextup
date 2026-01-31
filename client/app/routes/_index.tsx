import { Button } from "~/components/shared/button/button";
import { TaskList } from "~/components/task/task-list/task-list";
import { PlusIcon } from "~/components/shared/icons/plus-icon";

export function meta() {
  return [{ title: "Nextup" }, { name: "description", content: "A todo app!" }];
}

// const DELETE_TASKS: TypedDocumentNode<DeleteTasksMutation, DeleteTasksMutationVariables> = gql`
//   mutation DeleteTasks($ids: [ID!]!) {
//     deleteTasks(ids: $ids) {
//       id
//     }
//   }
// `;

// const COMPLETE_TASK: TypedDocumentNode<CompleteTaskMutation, CompleteTaskMutationVariables> = gql`
//   mutation CompleteTask($id: ID!, $completed: Boolean!) {
//     completeTask(id: $id, completed: $completed) {
//       id
//     }
//   }
// `;

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <TaskList title="Today's Tasks" />
      <div className="fixed bottom-6 right-6">
        <Button size="lg" icon={<PlusIcon />}>
          Add Task
        </Button>
      </div>
    </div>
  );
}
