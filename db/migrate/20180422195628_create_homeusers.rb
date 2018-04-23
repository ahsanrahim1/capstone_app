class CreateHomeusers < ActiveRecord::Migration[5.1]
  def change
    create_table :homeusers do |t|
      t.integer :home_id
      t.integer :user_id

      t.timestamps
    end
  end
end
