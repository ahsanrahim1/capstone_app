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
p "To create a new user press 1"
p "to create a new home press 2"
p " 3 to view all homes"





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
end