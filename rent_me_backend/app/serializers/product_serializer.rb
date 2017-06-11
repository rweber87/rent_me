class ProductSerializer < ActiveModel::Serializer
  	attributes :id, :name, :description, :category, :avail_to_rent, :image_url, :cost_to_rent, :renters, :owner_id
  	has_many :sales
	has_many :reviews, through: :sales
end
