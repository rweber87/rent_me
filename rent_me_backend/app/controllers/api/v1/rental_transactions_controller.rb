class Api::V1::RentalTransactionsController < ApplicationController

	def create
		user_id = params[:userId].to_i
		cart = params[:cart]
		prod_ids = params[:cart].collect{ |item| item["id"].to_i } 
		transaction_total = params["cart_total"].to_i 
		user = User.find(user_id)
		transaction = RentalTransaction.create(renter_id: user_id, product_ids: prod_ids, total_cost: transaction_total )
		change_availability(cart, transaction)
		render json: transaction
	end

	def change_availability(cart, transaction)
		product = 0
		cart.each do |item|
			product = Product.find(item["id"])
			product["avail_to_rent"] = false
			product.save
			create_sale(transaction, product.id)
		end
	end

	def create_sale(transaction,id)
		date_of_return = Time.zone.now + params["cart"][0]["days_to_rent"].day
		sale = Sale.new(rental_transaction_id: transaction.id, product_id: id, expected_date_of_return:  date_of_return)
		sale.save
	end

	#1. create a total rental transaction
		#a. renter_id, product_ids = [array of ids], total_cost
	#2. create a sale for every item in the transaction
		#a. switch available boolean to false when sale persists
		#b. rental_transaction_id, product_id, expected_date_of_return


	private


end
