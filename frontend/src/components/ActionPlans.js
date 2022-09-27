class ActionPlans {
  constructor() {
    this.actionPlans = [];
    this.adapter = new ActionPlansAdapter();
    this.bindingsAndListeners();
    this.getLoad();
  }

  bindingsAndListeners() {
    // form for creating new
    this.createForm = document.getElementById("create-action-plan");

    // select all input fields for new
    this.creatorField = document.getElementById("creator");
    this.goalField = document.getElementById("goal");
    this.collaboratorsField = document.getElementById("collaborators");
    this.deadlineField = document.getElementById("deadline");
    this.deadlineReasonField = document.getElementById("deadline_reason");

    // attach listener on form !form's button
    // per MDN: https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
    this.createForm.addEventListener("submit", this.createActionPlan.bind(this));
  }

  getLoad() {
    this.adapter.getActionPlans()
    .then(actionPlans => {
      actionPlans.forEach(ap => this.actionPlans.push(new ActionPlan(ap)))
    })
    .then(() => this.renderAll())
    .catch((error) => console.log(error))
  }

  renderAll() {
    this.actionPlans.forEach(actionPlan => actionPlan.render())
  }

  createActionPlan(e) {
    e.preventDefault(); // SubmitEvent
    // WORKS
    return fetch(this.adapter.endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({creator: this.createForm.creator.value,
        goal: this.createForm.goal.value,
        collaborators: this.createForm.collaborators.value,
        deadline: this.createForm.deadline.value,
        deadline_reason: this.createForm.deadline_reason.value
      })
    })
    .then((response) => {
      // console.log(response.json());
      return response.json();
    }) 
    .catch((error) => {
      console.log(error);
    });
  }

  setActionPlan() {
    // console.log(`setactionPlan() via components/actionPlans`)
    this.actionPlan.render()
    // reset fields
    this.creatorField.value = ""
    this.goalField.value = ""
    this.collaboratorsField.value = ""
    this.deadlineField.value = ""
    this.deadlineReasonField.value = ""
  }

}