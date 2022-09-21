class ActionItem {
  constructor(actionItemJSON) {
    this.id = actionItemJSON.id
    this.assignees = actionItemJSON.assignees
    this.description = actionItemJSON.description
    this.status = actionItemJSON.status
    this.deadline = actionItemJSON.deadline
    this.action_plan_id = actionItemJSON.action_plan_id
  }

  actionItemBindings() {

  }

  renderActionItem() {

  }

}