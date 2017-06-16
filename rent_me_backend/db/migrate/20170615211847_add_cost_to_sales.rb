class AddCostToSales < ActiveRecord::Migration[5.1]
  def change
    add_column :sales, :cost, :float
  end
end
