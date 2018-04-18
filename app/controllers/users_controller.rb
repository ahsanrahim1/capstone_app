class UsersController < ApplicationController 
  def create
    user = User.new(
     name: params[:name],
     email: params[:email],
     password: params[:password],
     password_confirmation: params[:password_confirmation]
      )
    if user.save
      render json:{messgae:" User Registered "}, status: :created
    else
      render json:{messgae:" Registry failed "}, status: :bad_request
    end
  end
end
