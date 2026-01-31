import { SectionHeading } from "~/components/shared/section-heading/section-heading";
import { TaskItem } from "../task-item";
import { useQueryTasks } from "~/hooks/useGetTasks";
import { useState } from "react";
import type { Task as TaskType } from "~/graphql/types/__generated__/graphql";
import { useDeleteTasks } from "~/hooks/useDeleteTasks";

interface Props {
  title: string;
}

export type Task = Pick<TaskType, "id" | "title" | "description" | "completed">;

export function TaskList({ title }: Props) {
  const { data, loading } = useQueryTasks();
  const [deleteTasks] = useDeleteTasks();
  const [selectedTasks, setSelectedTasks] = useState<Task[]>([]);

  const handleDeleteTasks = () => {
    const ids = selectedTasks.map(task => task.id);
    deleteTasks({
      variables: {
        ids,
      },
      refetchQueries: ["GetTasks"],
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  const renderTaskItems = () => {
    if (data?.tasks.length === 0) {
      return <p className="text-zinc-700 italic">You currently have no tasks</p>;
    }

    return data?.tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          showDivider={index < data.tasks.length - 1}
          onSelect={setSelectedTasks}
        />
      );
    });
  };

  const renderDeleteButton = () => {
    return (
      <button type="button" onClick={handleDeleteTasks}>
        Delete tasks
      </button>
    );
  };

  return (
    <div className="bg-white flex flex-col items-start pb-4.5 w-full">
      <SectionHeading>{title}</SectionHeading>
      {renderDeleteButton()}
      {renderTaskItems()}
    </div>
  );
}
