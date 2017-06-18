class Api::V1::AuthController < ApplicationController
  
  def create
    user = User.find_by(username: params[:username])
    if user.present? && user.authenticate(params[:password])
      ## create a JWT token that encodes the user_id and send that back as part of the response...
      token = JWT.encode({user_id: user.id}, 'my$ecretK3y', 'HS256')
      render json: {
        user: {
          username: user.username,
          id: user.id
        },
        token: token
      }
    else
      render json: {error: 'No user or password found'}
    end
  end

  def delete
    render json: {message: 'destroy method has been hit!'}
  end
end