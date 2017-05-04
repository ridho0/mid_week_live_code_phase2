const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  name: { type: String },
  user_name: { type: String },
  password: { type: String }
})

let users = mongoose.model('users', userSchema)

module.exports = users
