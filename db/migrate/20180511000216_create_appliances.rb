class CreateAppliances < ActiveRecord::Migration[5.1]
  def change
    create_table :appliances do |t|
      t.string :friendlyName
      t.string :string
      t.string :manufacturer
      t.string :string
      t.string :modelDescription
      t.string :string
      t.string :serialNumber
      t.string :string
      t.string :macAddress
      t.string :string
      t.integer :room_id

      t.timestamps
    end
  end
end
