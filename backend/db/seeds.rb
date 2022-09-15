# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# create_table "action_items", force: :cascade do |t|
#   t.string "assignees"
#   t.string "status"
#   t.datetime "deadline"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
# end

require "faker"
require "date"
require "pry"

biz = {}
categories = %w(Recipes Management Finance-Budget Inventory Technical Brand Social Media Event)
collaborators = %w(Amanda Brendin Benny Madi Mickela Tess Chris Peyton Shashank Lauren Ben Kristi Carl)
statuses = %w(New In-Progress Complete Closed)
goals = ["Submit all necessary permits/documents to operate a food truck", "Receiving a well-above passing score on our state safety inspection", "Hire more folks to deal with high turnover", "Decrease employee turnover by creating a mentorship and leadership program", "Have a fully-staffed serving team within 1 month", "Add new recipe to core dessert menu", "Analyze Yelp reviews for the past quarter to make improvements", "Finish employee reviews", "Budget for new commercial appliances within Q1 & Q2 of next year"]
deadlines = ["I will be out of town the following week, so this should be done before then", "We're anticipating a state safety review within the quarter", "We need to improve customer relations at the Main St. location ASAP"]
biz[:collaborators] = collaborators
biz[:statuses] = statuses
biz[:goals] = goals
biz[:categories] = categories
biz[:deadlines] = deadlines

# action_plans = ActionPlan.create(
#   {creator: collaborators.sample, collaborators: collaborators.sample(5).uniq.join(", "), status: statuses.sample, goal: goals.sample, deadline: random_deadline, deadline_reason: deadlines.sample, category: categories.sample, percent_complete: rand(100)},
#   {creator: collaborators.sample, collaborators: collaborators.sample(5).uniq.join(", "), status: statuses.sample, goal: goals.sample, deadline: random_deadline, deadline_reason: deadlines.sample, category: categories.sample, percent_complete: rand(100)}
#   )

# def random_deadline
#   deadline = Faker::Date.between(from: Date.parse(Date.today.to_s), to: Date.parse('31/12/2022'))
#   r_date = Date.parse(deadline.to_s).strftime("%m/%d/%Y")
# end

define_method :random_deadline do
  deadline = Faker::Date.between(from: Date.parse(Date.today.to_s), to: Date.parse('31/12/2022'))
  r_date = Date.parse(deadline.to_s).strftime("%m/%d/%Y")
end

def create_action_plans_seeds(int_arg, biz)
  action_plans = []
  int_arg.times do 
    puts random_deadline
    binding.pry
    ap = ActionPlan.create(
      creator: biz[:collaborators].sample,
      collaborators: biz[:collaborators].sample(5).uniq.join(", "),
      status: biz[:statuses].sample,
      goal: biz[:goals].sample,
      deadline: random_deadline,
      deadline_reason: biz[:deadlines].sample,
      category: biz[:categories].sample,
      percent_complete: rand(100)
    )
    binding.pry
    action_plans << ap
  end
end

create_action_plans_seeds(1, biz)