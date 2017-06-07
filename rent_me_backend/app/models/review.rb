class Review < ApplicationRecord
	belongs_to :sale
	belongs_to :renter, class_name: 'User'
end
