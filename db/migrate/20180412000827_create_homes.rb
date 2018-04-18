class CreateHomes < ActiveRecord::Migration[5.1]
  def change
    create_table :homes do |t|
      t.string :name
      t.string :address
      t.integer :user_id

      t.timestamps
    end
  end
end
