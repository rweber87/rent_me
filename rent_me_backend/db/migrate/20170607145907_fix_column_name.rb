class FixColumnName < ActiveRecord::Migration[5.1]
  def change
  	rename_column :sales, :transaction_id, :rental_transaction_id
  end
end
