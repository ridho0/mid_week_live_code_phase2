const mongoose = require('mongoose')
const Schema = mongoose.Schema

let restaurantSchema = new Schema({
  name: { type: String },
  owner: { type: String },
  address: { type: String },
  open_status: { type: String }
})

let restaurants = mongoose.model('restaurants', restaurantSchema)

module.exports = restaurants
