# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :delete_tasks, [ Types::TaskType ], null: true, description: "Deletes tasks by IDs" do
      argument :ids, [ ID ], required: true
    end
    field :complete_task, Types::TaskType, null: true, description: "Update task as complete by IDs" do
      argument :id, ID, required: true
      argument :completed, Boolean, required: true
    end

    def delete_tasks(ids:)
      tasks = Task.where(id: ids)
      tasks.destroy_all
    end

    def complete_task(id:, completed:)
      task = Task.find(id)
      task.update({ completed: completed })
      task
    end
  end
end
