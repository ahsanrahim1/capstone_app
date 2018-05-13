Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post 'user_token' => 'user_token#create'
  post '/users' => 'users#create'
  get '/homes' => 'homes#index'
  post '/homes' => 'homes#create'
  get '/homes/:id' => 'homes#show'
  get '/rooms' => 'rooms#index'
  get '/rooms/:id' => 'rooms#show'
  post '/rooms' => 'rooms#create'
  get '/info' => 'users#get_info'
  get '/appliances' => 'appliances#index'
  get '/run-wemo' => 'appliances#run'
  get '/find-wemo-devices' => 'appliances#find'

end
