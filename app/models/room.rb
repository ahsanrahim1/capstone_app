class Room < ApplicationRecord
  belongs_to :home
  has_many :appliances

  def as_json
    {
      name: name,
      appliances: appliances.as_json,
      floor: floor,
      top: top,
      left: left,
      width: width,
      height: height
    }
  end
end
