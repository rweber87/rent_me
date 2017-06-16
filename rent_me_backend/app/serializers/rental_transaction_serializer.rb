class RentalTransactionSerializer < ActiveModel::Serializer
  attributes :id, :renter_id, :product_ids, :total_cost, :created_at
  belongs_to :renter, class_name: 'User'
  has_many :sales
  has_many :products, through: :sales
end
