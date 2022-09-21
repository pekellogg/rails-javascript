class ActionItem {
  constructor(actionItemJSON) {
    // this.id = actionItemJSON.id
    this.assignees = actionItemJSON.assignees
    this.description = actionItemJSON.description
    this.status = actionItemJSON.status
    this.deadline = actionItemJSON.deadline
    // this.action_plan_id = actionItemJSON.action_plan_id
    this.bindingsAndListeners();
    this.render();
  }

  bindingsAndListeners() {
    this.view = document.getElementById("action-items-div-child");
  }

  render() {
    const div = document.createElement("div");
    div.setAttribute("id", this.description);
    this.view.appendChild(div);

    const p1 = document.createElement("p");
    p1.innerText = `Action Item: ${this.description}`;
    div.appendChild(p1);

    const p3 = document.createElement("p");
    p3.innerText = `Complete by: ${this.deadline}`
    div.appendChild(p3);

    let assignees = this.assignees.split(", ")
    let unordered = document.createElement("ul");
    for (const i in assignees) {
      let li = document.createElement("li");
      li.innerText = assignees[i];
      unordered.appendChild(li);
    }
    div.appendChild(unordered);
  }

}