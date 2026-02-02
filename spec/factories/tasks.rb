FactoryBot.define do
  factory :task do
    title { "Task Title" }
    description { "Task description" }
    completed { false }
  end
end
