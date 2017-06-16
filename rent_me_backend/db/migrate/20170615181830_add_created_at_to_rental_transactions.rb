class AddCreatedAtToRentalTransactions < ActiveRecord::Migration[5.1]
  def change
    add_column :rental_transactions, :created_at, :date
  end
end
