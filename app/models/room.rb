class Room < ApplicationRecord
  belongs_to :home
  has_many :appliances

  def as_json
    {
      name: name,
      appliances: appliances.as_json
    }
  end
end
