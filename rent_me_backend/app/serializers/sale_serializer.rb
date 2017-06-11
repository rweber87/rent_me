class SaleSerializer < ActiveModel::Serializer
  	belongs_to :product
	belongs_to :rental_transaction
	has_one :review
  	attributes :id, :rental_transaction_id, :product_id, :expected_date_of_return
  
end
