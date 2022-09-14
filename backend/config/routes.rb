Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :action_items
      resources :action_plans
    end
  end

end
