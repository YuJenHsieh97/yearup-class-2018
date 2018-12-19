class CreateCars < ActiveRecord::Migration[5.0]
    def up
        create_table :cars do |row|
            row.string :car_make
            row.string :car_model
            row.integer :car_year
            row.integer :cost_price
            row.integer :sale_markup
            row.integer :sale_id
        end
    end

    def down
        drop_table :cars
    end
end