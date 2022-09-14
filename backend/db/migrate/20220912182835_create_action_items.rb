class CreateActionItems < ActiveRecord::Migration[7.0]
  def change
    create_table :action_items do |t|
      t.string :assignees
      t.string :status
      t.datetime :deadline

      t.timestamps
    end
  end
end
