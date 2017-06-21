class Api::V1::RentalTransactionsController < ApplicationController
	
	def index
		user_id = params[:id]
	    transactions = RentalTransaction.where(renter_id: user_id)
	    render json: transactions
	end

	def create
		user_id = params[:id]
		cart = JSON.parse(params[:cart]) 
		transaction_total = params["cart_total"].to_i 
		transaction = RentalTransaction.create(renter_id: user_id, total_cost: transaction_total, created_at: Time.zone.now )
		transaction.create_sales(cart)
		render json: transaction
	end

end
