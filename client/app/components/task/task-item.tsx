import { useState } from "react";
import { Checkbox } from "~/components/shared/checkbox/checkbox";
import type { Task } from "./task-list/task-list";

interface TaskItemProps {
  id: string;
  title: string;
  description: string | null;
  completed?: boolean;
  showDivider?: boolean;
  onSelect: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function TaskItem({ id, title, description, showDivider = true, onSelect }: TaskItemProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    onSelect(prev => {
      if (isChecked) {
        return prev.filter(task => task.id !== id);
      }
      return [{ id, title, description, completed: true }, ...prev];
    });
    setIsChecked(prev => !prev);
  };

  return (
    <div className="bg-white flex gap-2.5 items-start px-4.5 w-full">
      <div className="flex items-start pr-2.5 py-4.5">
        <Checkbox
          id={`task-${id}`}
          checked={isChecked}
          onChange={handleChange}
          // aria-label={`Mark "${title}" as ${completed ? "incomplete" : "complete"}`}
        />
      </div>
      <div className="flex flex-1 gap-2.5 items-center self-stretch relative">
        <div className="flex flex-1 flex-col items-start py-4.5">
          <div className="flex flex-col gap-1 w-full">
            <p
              className={`
                text-[17px] leading-[1.35] font-normal overflow-hidden
                `}
              // ${completed ? "text-[rgba(33,33,33,0.5)] line-through" : "text-[#212121]"}
            >
              {title}
            </p>
            {description && (
              <p className="text-[17px] leading-[1.35] font-normal text-[rgba(33,33,33,0.5)] overflow-hidden">
                {description}
              </p>
            )}
          </div>
        </div>
        {showDivider && (
          <div className="absolute bg-[rgba(0,0,0,0.12)] bottom-0 h-[0.5px] left-0 right-0" />
        )}
      </div>
    </div>
  );
}
