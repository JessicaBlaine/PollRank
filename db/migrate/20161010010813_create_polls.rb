class CreatePolls < ActiveRecord::Migration[5.0]
  def change
    create_table :polls do |t|
      t.string :question, null: false
      t.string :string_id

      t.index :string_id, unique: true

      t.timestamps
    end
  end
end
