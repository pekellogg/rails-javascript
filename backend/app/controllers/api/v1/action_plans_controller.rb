class Api::V1::ActionPlansController < ApplicationController
  wrap_parameters ActionPlan # https://api.rubyonrails.org/v7.0.4/classes/ActionController/ParamsWrapper.html
  
  def index
    @action_plans = ActionPlan.all
    render @action_plans
  end

  # def new
  # end

  def create
    @action_plan = ActionPlan.create(action_plan_params)
    render @action_plan if @action_plan.save
  end

  def show
    @action_plan = ActionPlan.find(params[:id])
  end

  # def edit
  # end

  def update
    @action_plan = ActionPlan.find(params[:id])
  end

  def destroy
    ActionPlan.find(params[:id]).destroy
  end

  private

  def action_plan_params
    params.require(:action_plan).permit(:id, :creator, :collaborators, :status, :goal, :deadline, :deadline_reason, :category, :percent_complete, :created_at, :updated_at, action_item_ids: [])
  end
  
end
