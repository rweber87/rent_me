class Sale < ApplicationRecord
	belongs_to :product
	belongs_to :rental_transaction
	has_one :review
end
