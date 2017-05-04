const mongoose = require('mongoose')
const Schema = mongoose.Schema

let foodSchema = new Schema({
  name: { type: String },
  price: { type: String },
  expired_date: { type: String }
})

let foods = mongoose.model('foods', foodSchema)

module.exports = foods
