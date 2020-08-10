class AddReview < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :username, null: false
      t.integer :rating, null: false
      t.string :comment      

      t.belongs_to :store, null: false
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
