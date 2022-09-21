class ActionPlan {
  constructor(apJSON) {
    this.id = apJSON.id
    this.creator = apJSON.creator
    this.collaborators = apJSON.collaborators
    this.status = apJSON.status
    this.goal = apJSON.goal
    this.deadline = apJSON.deadline
    this.deadline_reason = apJSON.deadline_reason
    this.category = apJSON.category
    this.percent_complete = apJSON.percent_complete
    this.bindings();
    this.listeners();
    this.elements = this.createElements();
    this.render = this.render();
  }

  bindings() {
    this.heading = document.getElementById("action-plan");
  }

  listeners() {
    this.actionPlan.addEventListener("click", this.render.bind(this));
  }

  render() {
    console.log(`ActionPlans render()`);
    this.elements.foreach(p => this.heading.appendChild())
  }

  createElements() {
    elements = []
    for (const key in this) {
      const p = document.createElement("p");
      p.innerText = `${this[key]}`
      elements.push(p)
    }
    return elements;
  }

  // renderCollection(items) {
  //   new ActionItems(items, this);
  // }

  // updateCollection(items) {
  //   // update = this.ActionItems//.find
  // }
}