const mongoose = require('mongoose');
const rt = require('rand-token');
const { Schema, model, Types } = mongoose;


const tokenSchema = new Schema({
  userId: { type: Types.ObjectId, required: true, ref: 'User' },
  token: { type: String, required: true },
});

//tokenSchema.createIndex({"expire_at": 1 }, { expireAfterSeconds: 60 }); // 5 minutos

exports.generateToken = () =>{ return rt.generate(16) }

exports.Token = model("Token", tokenSchema);