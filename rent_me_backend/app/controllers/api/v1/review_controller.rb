class Api::V1::ReviewController < ApplicationController

	def create
		review = Review.create(review_params)
		render json: review
	end

	def update
		review = Review.find(paramsp[:id])
		review.update
		render json: review
	end

	def destroy
		review = Review.find(params[:id])
		review.destroy
		render json: review
	end

	def show
		review = Review.find(params[:id])
		render json: review
	end

	private

	def review_params
		params.require(:review).permit(:product_id, :renter_id, :body)
	end

end