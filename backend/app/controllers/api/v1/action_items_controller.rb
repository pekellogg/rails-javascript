class Api::V1::ActionItemsController < ApplicationController
  wrap_parameters ActionItem # https://api.rubyonrails.org/v7.0.4/classes/ActionController/ParamsWrapper.html
  
  def index
    @action_items = ActionItem.all
    render @action_items
  end

  # def new
  # end

  def create
    @action_item = ActionItem.create(action_item_params)
    render @action_item if @action_item.save
  end

  def show
    @action_item = ActionItem.find(params[:id])
  end

  # def edit
  # end

  def update
    @action_item = ActionItem.find(params[:id])
    render @action_item if @action_item.update(action_item_params)
  end

  def destroy
    ActionItem.find(params[:id]).destroy
  end

  private

  def action_item_params
    params.require(:action_item).permit(:id, :assignees, :status, :deadline, :created_at, :updated_at)
  end
  
end
