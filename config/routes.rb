Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  resources :responses, only: [:index]
  resources :results, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :responses, only: [:create]
      resources :results, only: [:index, :show]
    end
  end
end
