class Api::V1::UserController < ApplicationController
  
  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.create(user_params)
  end

  def update
    user = User.find(params[:id])
    user.update(user_params)
    render json: user    
  end  

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :address)    
  end
end