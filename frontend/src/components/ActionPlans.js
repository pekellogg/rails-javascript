class ActionPlans {
  constructor() {
    this.actionPlans = [];
    this.adapter = new ActionPlansAdapter();
    this.bindingsAndListeners();
    this.getLoad();
  }

  bindingsAndListeners() {
    this.view = document.getElementById("action-plans-div");
  }

  getLoad() {
    this.adapter.getActionPlans()
    .then(actionPlans => {
      actionPlans.forEach(ap => 
        this.actionPlans.push(new ActionPlan(ap)))
    })
    .then(() => {
      this.renderAll();
    })
  }

  renderAll() {
    this.actionPlans.forEach(actionPlan => { actionPlan.render() })
  }

}