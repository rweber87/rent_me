class SaleSerializer < ActiveModel::Serializer
  	attributes :id, :rental_transaction_id, :product_id, :expected_date_of_return, :cost
  	belongs_to :product
	belongs_to :rental_transaction
	has_one :review
end
