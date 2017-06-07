class RentalTransaction < ApplicationRecord
	belongs_to :renter, class_name: 'User'
	has_many :sales
	has_many :products, through: :sales
end
