Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  
  get '/stores', to: 'homes#index'
  get '/stores/:id', to: 'homes#index'
  get '/stores/:id/reviews', to: 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :stores, only: [ :index, :show ] do
        resources :reviews, only: [:create]
      end
    end
  end
end
