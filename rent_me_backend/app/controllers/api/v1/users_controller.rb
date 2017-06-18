class Api::V1::UsersController < ApplicationController
  before_action :authorize_account!
   
  def show
    user = User.find(params["id"])
    render json: user
  end

  def products
    user = User.find(params["id"])
    render json: user.products
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

  def transactions
    user_id = params[:id]
    transactions = RentalTransaction.where(renter_id: user_id)
    render json: transactions
  end

  def update
    user = User.where(id: params["id"])
    user.update(user_params)
    render json: user    
  end  

  private

  def user_params
    params.require(:user).permit(:username, :password)    
  end
end
