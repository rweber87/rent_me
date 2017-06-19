class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :sale_id, :renter_id
  belongs_to :sale
  belongs_to :renter, class_name: 'User'
  
end
