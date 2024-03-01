class CreateBeers < ActiveRecord::Migration[7.1]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.string :brand, null: false
      t.string :style, null: false
      t.string :country
      t.integer :quantity, default: 0

      t.timestamps
    end
  end
end
