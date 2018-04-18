class RoomsController < ApplicationController
  before_action :authenticate_user
  def index
    room = Room.all
    render json: room.as_json
  end

  def create
    room = Room.new(
     name: params[:name],
     home_id: params[:home_id],
      )
    if home.save
      render json:{messgae:" Home Registered "}, status: :created
    else
      render json:{messgae:" Registry failed "}, status: :bad_request
    end
  end
end