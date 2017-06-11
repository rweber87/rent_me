class ChangeColumnInReviews < ActiveRecord::Migration[5.1]
  def change
  	rename_column :reviews, :product_id, :sale_id
  end
end
