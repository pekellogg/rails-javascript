class ActionItemsAdapter {
  constructor(){
    this.endPoint = "http://localhost:3000/api/v1/action_items"
  }

  // index
  getActionItems() {
    return fetch(this.endPoint)
    .then(response => {
      return response.json()
    });
  }

  // create
  // createActionItem(actionPlanID, actionItemObj) {
  //   const actionItem = {
  //     id: actionItemObj.id,
  //     assignees: actionItemObj.assignees,
  //     description: actionItemObj.description,
  //     status: actionItemObj.status,
  //     deadline: actionItemObj.deadline,
  //     action_plan_id: actionPlanID
  //   }
  //   return fetch(this.endPoint, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({ actionItem: actionItem })
  //   }).then(response => response.json())
  //   .catch(e => console.error(e))
  // }

  // read/show
  getActionItem(actionItemID) {
    return fetch(`${this.endPoint}/${actionItemID}`)
    .then(response => {
      response.json()
    });
  }

  // update
  // updateActionItem(actionItemID, actionItemObj) {
  //   const actionItem = {
  //     id: actionItemObj.id,
  //     assignees: actionItemObj.assignees,
  //     description: actionItemObj.description,
  //     status: actionItemObj.status,
  //     deadline: actionItemObj.deadline,
  //     action_plan_id: actionPlanID
  //   }
  //   return fetch(`${this.endPoint}/${actionItemID}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({ actionItem: actionItem })
  //   }).then(response => {
  //     return response.json()
  //   }).catch(e => console.error(e))
  // }

  // destroy
  // destroyActionItem() {

  // }
}