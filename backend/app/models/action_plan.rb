class ActionPlan < ApplicationRecord
  has_many :collaborators, through: :action_items
  has_many :action_items
end