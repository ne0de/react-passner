const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  createTime: { type: Date, default: Date.now }
});

module.exports = model("User", userSchema);