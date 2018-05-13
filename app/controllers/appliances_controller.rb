class AppliancesController < ApplicationController

  def index
    appliances = Appliance.all
    render json: appliances.as_json
  end

  def run
    response = Unirest.get("http://localhost:4000/run-wemo")
    render json: response.body
  end

  def find
    response = Unirest.get("http://localhost:4000/find-wemo-devices")
    render json: response.body
  end


end
