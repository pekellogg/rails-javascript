class actionPlan {
  constructor(actionPlanJSON) {
    this.id = actionPlanJSON.id
    this.creator = actionPlanJSON.creator
    this.collaborators = actionPlanJSON.collaborators
    this.status = actionPlanJSON.status
    this.goal = actionPlanJSON.goal
    this.deadline = actionPlanJSON.deadline
    this.deadline_reason = actionPlanJSON.deadline_reason
    this.category = actionPlanJSON.category
    this.percent_complete = actionPlanJSON.percent_complete
  }
}