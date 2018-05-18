Rails.application.routes.draw do
  root to: 'cocktails#index'
  resources :cocktails, only: [:new, :create, :show] do
    resources :doses, only: [:create, :destroy, :edit, :update, :delete]
  end
end
