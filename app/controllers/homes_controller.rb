class HomesController < ApplicationController
  before_action :authenticate_user

  def show
    home_id = params["id"]
    home = Home.find_by(id: home_id)
    render json: home.as_json
  end

  def index
    if params[:other]
      homes = Home.where.not(user_id: current_user.id)
    else
      homes = current_user.homes
    end
    render json: homes.as_json
  end

  def create
    home = Home.new(
     name: params[:name],
     address: params[:address],
     user_id: current_user.id,
      )
    if home.save
      render json:{message:" Home Registered "}, status: :created
    else
      render json:{message:" Registry failed "}, status: :bad_request
    end
  end  
end
