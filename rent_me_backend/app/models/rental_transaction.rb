class RentalTransaction < ApplicationRecord
	belongs_to :renter, class_name: 'User'
	has_many :sales
	has_many :products, through: :sales

	def create_sales(cart)
		product_ids = cart.map {|item| item["id"]}
		Product.set_to_rented(product_ids)
		# look at each product
		cart.each do |item|
			days_to_rent = item["days_to_rent"]
			date_of_return = Time.zone.now + days_to_rent.day
			cost = days_to_rent * Product.find(item["id"]).cost_to_rent
			self.sales.create(product_id: item["id"], expected_date_of_return:  date_of_return, cost: cost)
		end
	end

end
