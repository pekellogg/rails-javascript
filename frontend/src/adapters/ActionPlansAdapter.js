class ActionPlansAdapter {
  constructor(){
    this.endPoint = "http://localhost:3000/api/v1/action_plans"
  }

  // index
  getActionPlans() {
    return fetch(this.endPoint)
    .then(response => {
      return response.json()
    })
  }

  // create
  createActionPlan(actionPlanObj) {
    const actionPlan = {
      id: actionPlanObj.id,
      creator: actionPlanObj.creator,
      collaborators: actionPlanObj.collaborators,
      status: actionPlanObj.status,
      goal: actionPlanObj.goal,
      deadline: actionPlanObj.deadline,
      deadline_reason: actionPlanObj.deadline_reason,
      category: actionPlanObj.category,
      percent_complete: actionPlanObj.percent_complete
    }
    return fetch(this.endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ actionPlan: actionPlan })
    }).then(response => response.json())
    .catch(e => console.error(e))
  }

  // read / show
  getActionPlan(actionPlanID) {
    return fetch(`${this.endPoint}/${actionPlanID}`)
    .then(response => {
      response.json()
    })
  }

  // update
  updateActionPlan(actionPlanID, actionPlanObj) {
    const actionPlan = {
      id: actionPlanObj.id,
      creator: actionPlanObj.creator,
      collaborators: actionPlanObj.collaborators,
      status: actionPlanObj.status,
      goal: actionPlanObj.goal,
      deadline: actionPlanObj.deadline,
      deadline_reason: actionPlanObj.deadline_reason,
      category: actionPlanObj.category,
      percent_complete: actionPlanObj.percent_complete
    }
    return fetch(`${this.endPoint}/${actionPlanID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ actionPlan: actionPlan })
    }).then(response => {
      return response.json()
    }).catch(e => console.error(e))
  }

  // destroy
  // destroyActionPlan() {

  // }
}