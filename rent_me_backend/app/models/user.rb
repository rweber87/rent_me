class User < ApplicationRecord
	has_many :products, foreign_key: 'owner_id'
	has_many :rental_transactions, foreign_key: 'renter_id'
	has_many :reviews, foreign_key: 'renter_id'
	has_many :renters, through: :products
	has_many :rentals, through: :products, class_name: 'RentalTransaction'
	has_secure_password
end
