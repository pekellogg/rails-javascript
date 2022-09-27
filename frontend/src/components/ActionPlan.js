class ActionPlan {
  constructor(apJSON) {
    // before: no bound methods
    // // this.id = apJSON.id
    // this.creator = apJSON.creator
    // this.collaborators = apJSON.collaborators
    // // this.status = apJSON.status
    // this.goal = apJSON.goal
    // this.deadline = apJSON.deadline
    // this.deadline_reason = apJSON.deadline_reason
    // // this.category = apJSON.category
    // // this.percent_complete = apJSON.percent_complete
    // this.bindingsAndListeners();
    // this.render();

    // after: testing bound methods
    // this.id = apJSON.id
    this.creator = apJSON.creator;
    this.collaborators = apJSON.collaborators;
    // this.status = apJSON.status;
    this.goal = apJSON.goal;
    this.deadline = apJSON.deadline;
    this.deadline_reason = apJSON.deadline_reason;
    // this.category = apJSON.category;
    // this.percent_complete = apJSON.percent_complete;
    this.bindingsAndListeners();
    this.render();
  }

  bindingsAndListeners() {
    this.view = document.getElementById("action-plans-div");
  }

  render() {
    // test as instance to be returned
    const div = document.createElement("div");
    div.setAttribute("class", "action-plan-js");
    div.setAttribute("id", this.goal);
    this.view.appendChild(div);

    const p1 = document.createElement("p");
    p1.innerText = `Action Plan: ${this.goal}`;
    div.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerText = `Created by: ${this.creator}`
    div.appendChild(p2);

    const p3 = document.createElement("p");
    p3.innerText = `To be completed by: ${this.deadline}`
    div.appendChild(p3);

    const p4 = document.createElement("p");
    p4.innerText = `For reason: "${this.deadline_reason}"`
    div.appendChild(p4);
    // console.log(this);
    // let collabos = this.collaborators.split(", ")
    let unordered = document.createElement("ul");
    // for (const i in collabos) {
    //   let li = document.createElement("li");
    //   li.innerText = collabos[i];
    //   unordered.appendChild(li);
    // }
    div.appendChild(unordered);
  }

  // updateCollection(items) {
  //   // update = this.ActionItems//.find
  // }
}