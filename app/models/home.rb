class Home < ApplicationRecord
  has_many :rooms
  has_many :homeusers
  has_many :users, through: :homeusers

  def as_json
    {
      id:id,
      name: name,
      address: address,
      image:image,
      rooms: rooms.as_json
    }
  end
end
