class ApplicationController < ActionController::API

private

def authorize_user!
	
end

def current_user
	
end

def decode(token)
	JWT.decode(token, 'my$ecretK3y', true, {algorithm: "HS256"})
	rescue JWT::DecodeError
		return nil
end

def token
	request.headers['Authorization']
end

end
