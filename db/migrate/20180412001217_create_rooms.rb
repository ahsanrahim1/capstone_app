class CreateRooms < ActiveRecord::Migration[5.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.integer :home_id
      t.integer :top
      t.integer :left
      t.integer :width
      t.integer :height
      t.integer :floor

      t.timestamps
    end
  end
end
