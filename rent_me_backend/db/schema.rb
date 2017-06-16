# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170615211847) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "category"
    t.boolean "avail_to_rent", default: true
    t.integer "owner_id"
    t.string "image_url"
    t.float "cost_to_rent"
  end

  create_table "rental_transactions", force: :cascade do |t|
    t.integer "renter_id"
    t.text "product_ids", default: [], array: true
    t.float "total_cost"
    t.date "created_at"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "sale_id"
    t.integer "renter_id"
    t.text "body"
  end

  create_table "sales", force: :cascade do |t|
    t.integer "rental_transaction_id"
    t.integer "product_id"
    t.date "expected_date_of_return"
    t.float "cost"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "address"
  end

end
