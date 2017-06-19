class Api::V1::SalesController < ApplicationController
	

	def index
		sale = Sale.all
		render json: sale
	end

	private

	def sale_params
		params.require(:sale).permit(:rental_transaction_id, :product_id, :expected_date_of_return)
	end

end