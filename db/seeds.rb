# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


[
  {
    id: "1",
    title: "Walk the dogs",
    description: "Snow shoe walk",
    completed: false
  },
  {
    id: "2",
    title: "Buy groceries",
    description: "Milk, eggs, bread, and vegetables",
    completed: false
  },
  {
    id: "3",
    title: "Call the dentist",
    description: "Schedule annual checkup appointment",
    completed: true
  },
  {
    id: "4",
    title: "Finish project report",
    description: "Complete Q1 summary and send to team",
    completed: false
  },
  {
    id: "5",
    title: "Clean the garage",
    description: "Organize tools and donate old items",
    completed: false
  },
  {
    id: "6",
    title: "Pay utility bills",
    description: "Electric and water due by end of month",
    completed: true
  }
].each do |task|
  Task.create(task)
end
