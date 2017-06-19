class Api::V1::UsersController < ApplicationController

  def show
    user = User.find(params["id"])
    render json: user
  end

  def products
    products = Product.where(owner_id: params["id"])
    render json: products
  end

  def create
    pw_err = "Passwords do not match!"
    user_error = "Username already exists"
    user = User.find_by_username(params[:username])
    if params[:password] != params[:password_confirmation]
      render json: pw_err
    elsif
      user.present?
      render json: user_error
    else
      user = User.new(user_params)
      user.save
      token = JWT.encode({user_id: user.id}, 'my$ecretK3y', 'HS256')
      render json: {
        user: {
          username: user.username,
          id: user.id
        },
        token: token
      }
    end
  end

  def transactions
    user_id = params[:id]
    transactions = RentalTransaction.where(renter_id: user_id)
    render json: transactions
  end

  def update
    user = User.find(id: params["id"])
    user.update(user_params)
    render json: user    
  end  

  private

  def user_params
    params.require(:user).permit(:username, :password)    
  end
end
