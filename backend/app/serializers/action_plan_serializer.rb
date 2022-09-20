class ActionPlanSerializer
  
  def initialize(action_plan)
    @action_plan = action_plan
  end

  def serialize_json
    options = {
      only: [:creator, :collaborators, :status, :goal, :deadline, :deadline_reason, :category, :percent_complete],
      include: {
        action_items: {
          only: [:assignees, :description, :status, :deadline]
        }
      }
    }
    @action_plan.to_json(options)
  end

end