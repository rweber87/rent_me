require 'rest-client'
class Product < ApplicationRecord
	belongs_to :owner, class_name: 'User'
	has_many :sales
	has_many :reviews, through: :sales
	has_many :rental_transactions, through: :sales
	has_many :renters, through: :rental_transactions

	def self.set_to_rented(product_ids)
		Product.where('id IN (?)', product_ids).update(avail_to_rent: false)
	end

	def get_image_url(name)
		userInput = name.split(" ").map{|word| word.downcase }.join("+")
		RestClient.get('http://api.walmartlabs.com/v1/search?query=' + userInput + '&format=json&apiKey=37jt8ht5een6m23jntubkd85')
	end
end
