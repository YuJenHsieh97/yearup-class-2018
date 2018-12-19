# Based on http://www.jonathanleighton.com/articles/2011/awesome-active-record-bug-reports/

# Run this script with `bundle exec ruby app.rb`
require 'sqlite3'
require 'active_record'
require './models/car.rb'
require './models/customer.rb'
require './models/sale.rb'
#require classes
# require './models/cake.rb'

# Use `binding.pry` anywhere in this script for easy debugging
require 'pry'

# Connect to a sqlite3 database
# If you feel like you need to reset it, simply delete the file sqlite makes
ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'db/carson.db'
)
require 'csv'
CSV.foreach("./CAR_DATA.csv") do |row|
  first = row[1]
  last = row[2]
  email = row[3]
  gender = row[4]
  num = row[5]
  Customer.create(first_name: row[1], last_name: row[2], email: row[3], gender: row[4], phone_number: row[5])
end

require "csv"
CSV.foreach("./CAR_DATA.csv") do |row|
  make = row[6]
  model = row[7]
  year = row[8]
  price = row[9]
  markup = row[10]
  Car.create(car_make: row[6], car_model: row[7], car_year: row[8], cost_price: row[9], sale_markup: row[10])
end

Sale.create(car: car_id, customer: customer_id)
binding.pry
