class CreateProducts < ActiveRecord::Migration[5.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :category
      t.boolean :avail_to_rent, default: true
      t.integer :owner_id
      t.string :image_url
      t.float :cost_to_rent
    end
  end
end
