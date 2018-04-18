# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: "ahsan", email: "ahsan@email.com", password: "password")
User.create(name: "sam", email: "sam@email.com", password: "password")
User.create(name: "dan", email: "dan@email.com", password: "password")

Home.create(name: "Home 1", address: "7152 greenwood street, Morton Grove, il", user_id: 1)
Home.create(name: "Home 1", address: "7152 greenwood street, Morton Grove, il", user_id: 1)
Home.create(name: "Home 1", address: "7152 greenwood street, Morton Grove, il", user_id: 1)

Room.create(name: "room1", home_id: 1)
Room.create(name: "room2", home_id: 1)
Room.create(name: "room3", home_id: 1)