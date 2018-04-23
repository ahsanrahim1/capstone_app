class RemoveUserIdFromHome < ActiveRecord::Migration[5.1]
  def change
    remove_column :homes, :user_id, :integer
  end
end
