class CreateRentalTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :rental_transactions do |t|
    	t.integer :renter_id
    	t.text :product_ids, array: true, default: []
    end
  end
end
