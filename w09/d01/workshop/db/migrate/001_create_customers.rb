class CreateCustomers < ActiveRecord::Migration[5.0]
    def up
        create_table :customers do |row|
            row.string :first_name
            row.string :last_name
            row.string :email
            row.string :gender
            row.string :phone_number
            row.integer :sale_id
        end
    end

    def down
        drop_table :customers
    end
end