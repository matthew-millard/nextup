require "rails_helper"

RSpec.describe "GetTasks query" do
  let(:query) do
    <<~GQL
      query GetTasks {
        getTasks {
          id
          title
          description
          completed
          createdAt
          updatedAt
        }
      }
    GQL
  end

  context "when tasks exist" do
    it "returns all the tasks in the database" do
      create_list(:task, 5)
      result = NextupSchema.execute(query).dig("data", "getTasks")

      expect(result.count).to eq(5)
    end

    it "returns them in ascending order based on when they were created" do
      create(:task, title: "First task", created_at: 3.days.ago)
      create(:task, title: "Second task", created_at: 2.days.ago)
      create(:task, title: "Third task", created_at: 1.day.ago)

      result = NextupSchema.execute(query).dig("data", "getTasks")
      expect(result[2]["title"]).to eq("Third task")
      expect(result[1]["title"]).to eq("Second task")
      expect(result[0]["title"]).to eq("First task")
    end
  end

  context "when no tasks exist" do
    it "returns an empty array" do
    result = NextupSchema.execute(query).dig("data", "getTasks")

    expect(result).to match_array([])
  end
  end
end
