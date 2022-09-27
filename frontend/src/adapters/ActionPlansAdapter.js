class ActionPlansAdapter {
  constructor(){
    // console.log(`ActionPlansAdapter constructor()`);
    this.endPoint = "http://localhost:3000/api/v1/action_plans"
  }

  // index
  getActionPlans() {
    // console.log(`e`)
    return fetch(this.endPoint)
    .then(response => { 
      // console.log(`f`)
      return response.json() // .json returns promise too! look into
    });
  }

  // Content-Security-Policy: <policy-directive>; <policy-directive>
  // where <policy-directive> consists of: <directive> <value> with no internal punctuation.

  // create
  createActionPlan(apfromForm) {

    // console.log(apfromForm);

    return fetch(this.endPoint, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ apfromForm })
    })
    .then((response) => {
      return response.json()
    }) 
    .catch((error) => {
      console.log(error)
    });
  }

  // read/show
  getActionPlan(actionPlanID) {
    return fetch(`${this.endPoint}/${actionPlanID}`)
    .then(response => {
      return response.json()
    });
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