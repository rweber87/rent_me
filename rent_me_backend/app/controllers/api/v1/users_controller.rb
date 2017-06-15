class Api::V1::UsersController < ApplicationController
  
  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    pw_err = "Passwords do not match!"
    user_error = "Username already exists"
    user = User.find_by_username(params[:username])
    if params[:password] != params[:password_confirmation]
      render json: err
    elsif
      user.present?
      render json: user_error
    else
      user = User.new(user_params)
      user.save
      render json: user
    end
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user    
  end  

  private

  def user_params
    params.require(:user).permit(:username, :password)    
  end
end