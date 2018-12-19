class CreateSales < ActiveRecord::Migration[5.0]
    def up
        create_table :sales do |row|
        end
    end

    def down
        drop_table :sales
    end
end