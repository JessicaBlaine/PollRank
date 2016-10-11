Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :polls, only: :create do
      get 'results', to: 'results#show'
    end
  end

  root 'static_pages#root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
