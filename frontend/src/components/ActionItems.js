class ActionItems {
  constructor(actionItemJSON) {
    this.actionItems = [];
    this.adapter = new ActionItemsAdapter();
    // this.bindingsAndListeners();
    this.getLoad();
  }

  // bindingsAndListeners() {}

  getLoad() {
    this.adapter.getActionItems()
    // .then(actionItems => {
    //   actionItems.forEach(ai => 
    //     this.actionItems.push(new ActionItem(ai)))
    // })
    .then(actionItems => {
      // console.log(actionItems);
      actionItems.forEach(ai => this.actionItems.push(new ActionItem(ai)))
    })
    .then(() => {
      this.renderAll();
    })
  }

  renderAll() {
    this.actionItems.forEach(actionItem => { actionItem.render() })
  }

}