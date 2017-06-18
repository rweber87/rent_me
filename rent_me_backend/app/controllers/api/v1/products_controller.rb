class Api::V1::ProductsController < ApplicationController
   before_action :authorize_account!

  def index
    products = Product.all
    render json: products
  end

  def create
    product = Product.new(name: params['name'], description: params['description'], cost_to_rent: params['cost_to_rent'].to_i, image_url: params['image_url'], category: params['category'], owner_id: params['userId'].to_i)
    product.save
    render json: product
  end

  def update
    product = Product.find(params[:id])
    product.update(name: params['name'], description: params['description'], cost_to_rent: params['cost_to_rent'].to_i, image_url: params['image_url'], category: params['category'])
    render json: product
  end

  def destroy
    product = Product.find(params[:id])
    product.destroy
    render json: product
  end

  def show
    product = Product.find(params[:id])
    render json: product
  end

end
