class ActionPlansAdapter {
  constructor() {
    this.endPoint = "http://localhost:3000/api/v1/action_plans"
  }

  // index
  getActionPlans() {
    return fetch(this.endPoint)
    .then(response => response.json());
  }

  // create
  createActionPlan(apfromForm) {
    return fetch(this.endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(apfromForm)
    })
    .then(response => response.json()) 
    .catch(error => console.log(error));
  }

  // read/show
  getActionPlan(actionPlanID) {
    return fetch(`${this.endPoint}/${actionPlanID}`)
    .then(response => response.json())
    .catch(error => console.log(error));
  }

  // update
  // updateActionPlan(actionPlanID, apfromForm) {
  //   const actionPlan = {
  //     id: apfromForm.id,
  //     creator: apfromForm.creator,
  //     collaborators: apfromForm.collaborators,
  //     status: apfromForm.status,
  //     goal: apfromForm.goal,
  //     deadline: apfromForm.deadline,
  //     deadline_reason: apfromForm.deadline_reason,
  //     category: apfromForm.category,
  //     percent_complete: apfromForm.percent_complete
  //   }
  //   return fetch(`${this.endPoint}/${actionPlanID}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({ actionPlan: actionPlan })
  //   }).then(response => {
  //     return response.json()
  //   }).catch(e => console.error(e))
  // }

  // destroy
  // destroyActionPlan() {

  // }
}