class Sale < ActiveRecord::Base
    has_one :customer
    has_one :car
  
  end