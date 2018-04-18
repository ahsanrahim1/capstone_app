Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'user_token' => 'user_token#create'
  post '/users' => 'users#create'
  get '/homes' => 'homes#index'
  post '/homes' => 'homes#create'
  get '/rooms' => 'rooms#index'
  post '/rooms' => 'rooms#create'
end
