class Api::V1::ReviewsController < ApplicationController

	def create
		review = Review.create(sale_id: params["sale_id"], renter_id: params["renter_id"], body: params["body"])
		render json: review
	end

	def update
		review = Review.find(params[:id])
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


end