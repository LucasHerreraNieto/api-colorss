const e = require('express');
const mongoose = require('mongoose');
const  Schema  = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  password: String,
  email: String,
  palettes: Array
})

const UserModel = mongoose.model('User', UserSchema)
module.exports = {UserModel}
