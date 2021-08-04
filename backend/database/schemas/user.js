const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, require: true },
  password: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: Number, required: true },
  avatar: { type:Buffer, default: fs.readFileSync(path.join(__dirname, './avatar.png'), 'base64') },
  isVerified: { type: Boolean, default: false },
  createTime: { type: Date, default: Date.now }
});

module.exports = model("User", userSchema);