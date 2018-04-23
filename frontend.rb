# Login and set jwt as part of Unirest requests
require 'unirest'
response = Unirest.post(
  "http://localhost:3000/user_token",
  parameters: {
    auth: {
      email: "peter@email.com",
      password: "password"
    }
  }
)
jwt = response.body["jwt"]
Unirest.default_header("Authorization", "Bearer #{jwt}")
p jwt
p response.body
p "To create a new user press [1]"
p "To create a new home [2]"
p "To view your home [3]"
p "To create a new room [4]"
p "To join an existing home [5]"





input_word = gets.chomp

if input_word == "1"
  params = {
    name: "Peter",
    email: "peter@email.com",
    password: "password",
    password_confirmation: "password"
  }
  response = Unirest.post("http://localhost:3000/homes", parameters: params)
  p response.body

elsif input_word == "2"
  params = {
    name:"home_new",
    address:"address_new"
  }
  response = Unirest.post("http://localhost:3000/homes", parameters: params)
  p response.body

elsif input_word == "3"
  response = Unirest.get("http://localhost:3000/homes")
  homes = response.body
  puts JSON.pretty_generate(homes)

elsif input_word == "4"
  params = {
    name: "new_room",
    home_id: 5
  }
  response = Unirest.post("http://localhost:3000/rooms", parameters: params)
  room = response.body
  puts JSON.pretty_generate(room)

elsif input_word == "5"
  response = Unirest.get("http://localhost:3000/homes?other=true")
  homes = response.body
  puts JSON.pretty_generate(homes)
    
end

