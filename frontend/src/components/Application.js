class Application {
  constructor() {
    this.actionPlans = new ActionPlans();
    this.actionItems = new ActionItems();
    this.bindingsAndListeners();
  }

  bindingsAndListeners() {
    this.createActionPlanDiv = document.getElementById("new-action-plan-container");
    this.body = document.body;

    this.CreateActionPlanButton = document.getElementById("new-action-plan-button");
    this.CreateActionPlanButton.addEventListener("click", this.toggleCreateActionPlan);

    this.toggleActionPlansButton = document.getElementById("action-plans-button");
    this.toggleActionPlansButton.addEventListener("click", this.toggleActionPlans);

    this.toggleActionItemsButton = document.getElementById("action-items-button");
    this.toggleActionItemsButton.addEventListener("click", this.toggleActionItems);
  }

  toggleCreateActionPlan() {
    let createActionPlanDiv = document.getElementById("new-action-plan-container");
    if (createActionPlanDiv.className === "hidden") {
      createActionPlanDiv.className = "show"
    }
    else {
      createActionPlanDiv.className = "hidden"
    }
  }

  toggleActionPlans() {
    let actionPlansDiv = document.getElementById("action-plans-div");
    if (actionPlansDiv.className === "hidden") {
      actionPlansDiv.className = "show"
    }
    else {
      actionPlansDiv.className = "hidden"
    }
  }

  toggleActionItems() {
    let actionItemsDiv = document.getElementById("action-items-div");
    if (actionItemsDiv.className === "hidden") {
      actionItemsDiv.className = "show"
    }
    else {
      actionItemsDiv.className = "hidden"
    }
  }

}