require 'rails_helper'

RSpec.describe Task, type: :model do
  context "validations" do
    let(:task) { build(:task, title: nil) }

    it "validates presence of title" do
      expect(task).not_to be_valid
      expect(task.errors[:title]).to include("can't be blank")
    end
  end

  context "factory" do
    let(:task) { build(:task) }

    it "has a valid factory" do
      expect(task).to be_valid
    end

    it "has a title" do
      expect(task.title).to eq("Task Title")
    end

    it "has a description" do
      expect(task.description).to eq("Task description")
    end

    it "has completed default to false" do
      expect(task.completed).to be false
    end
  end
end
