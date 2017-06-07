class CreateSales < ActiveRecord::Migration[5.1]
  def change
    create_table :sales do |t|
      t.integer :transaction_id
      t.integer :product_id
      t.date :expected_date_of_return
    end
  end
end
