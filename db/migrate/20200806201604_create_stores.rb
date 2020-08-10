class CreateStores < ActiveRecord::Migration[5.2]
  def change
    create_table :stores do |t|
      t.string :name, null: false
      t.string :img_url, null: false
      t.string :category, null: false
      t.string :description, null: false
      t.string :address
      t.string :website_link

      t.timestamps null: false
    end
  end
end
