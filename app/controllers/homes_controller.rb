class HomesController < ApplicationController
  before_action :authenticate_user

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
      render json:{messgae:" Home Registered "}, status: :created
    else
      render json:{messgae:" Registry failed "}, status: :bad_request
    end
  end
end
