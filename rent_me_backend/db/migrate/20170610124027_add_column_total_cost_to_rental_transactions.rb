class AddColumnTotalCostToRentalTransactions < ActiveRecord::Migration[5.1]
  def change
  	add_column :rental_transactions, :total_cost, :float
  end
end
