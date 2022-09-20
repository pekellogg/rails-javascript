class ActionItemSerializer

  def initialize(action_item)
    @action_item = action_item
  end

  def serialize_json
    options = {
      only: [:assignees, :description, :status, :deadline]
    }
    @action_item.to_json(options)
  end

end