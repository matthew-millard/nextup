require "rails_helper"

RSpec.describe "deleteTasks Mutation" do
  let(:mutation) do
    <<~GQL
      mutation DeleteTasks($ids: [ID!]!) {
        deleteTasks(ids: $ids) {
          id
        }
      }
    GQL
  end

  context "when given valid task ids" do
    it "removes a single task from the database" do
      task = create(:task, title: "Task to delete")

      expect { NextupSchema.execute(mutation, variables: { ids: [ task.id ] }) }.to change(Task, :count).by(-1)
    end

    it "removes multiple tasks from the database" do
      created_tasks = create_list(:task, 3)
      task_ids = created_tasks.map { |t| t.id.to_s }

      expect { NextupSchema.execute(mutation,  variables: { ids: task_ids }) }.to change(Task, :count).by(-3)
    end

    it "returns the ids of deleted tasks" do
      created_task = create_list(:task, 5)
      task_ids = created_task.map { |t| t.id.to_s }

      result = NextupSchema.execute(mutation,  variables: { ids: task_ids })
      expect(result.dig("data", "deleteTasks").pluck("id")).to match_array(task_ids)
    end
  end
end
