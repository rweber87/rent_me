class Product < ApplicationRecord
	belongs_to :owner, class_name: 'User'
	has_many :sales
	has_many :reviews, through: :sales
	has_many :rental_transactions, through: :sales
	has_many :renters, through: :rental_transactions

	def self.set_to_rented(product_ids)
		Product.where('id IN (?)', product_ids).update(avail_to_rent: false)
	end
end
