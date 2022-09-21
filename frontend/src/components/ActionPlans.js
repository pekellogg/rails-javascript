class ActionPlans {
  constructor() {
    // console.log(`ActionPlans constructor()`);
    this.actionPlans = [];
    this.adapter = new ActionPlansAdapter();
    this.bindingsAndListeners();
    this.getLoad();
    this.renderAll();
  }

  bindingsAndListeners() {
    this.view = document.getElementById("action-plans");
  }

  getLoad() {
    // console.log(`ActionPlans getLoad()`);
    this.adapter.getActionPlans()
    .then(actionPlans => {
      actionPlans.forEach(actionPlan => this.actionPlans.push(actionPlan))
    })
    .then(() => {
    })
  }

  // setActionPlans() {
  //   this.actionPlans.forEach(ap => this.setActionPlan(ap))
  // }
  
  renderAll() {
    console.log(`ActionPlans renderAll()`);
    // console.log(this.actionPlans);
  }

}