Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:show, :create, :update, :destroy]
      resources :products, only: [:index, :show, :create, :update, :destroy]
      resources :reviews, only: [:index, :show, :create, :update, :destroy]
      resources :rental_transactions, only: [:create, :index]
      resources :sales, only: [:create, :index]
      post '/auth', to: 'auth#create'
      get '/logout', to: 'auth#destroy'
      get '/users/:id/transactions', to: 'users#transactions'
      get '/users/:id/products', to: 'users#products'
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
