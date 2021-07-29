/* schemas */
const User = require('../database/schemas/user')
const { Token, generateToken } = require('../database/schemas/token')

/* functions */
exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

/* Post routes */
exports.postNewUser = async (req, res) => {
    const values = req.body
    console.log(values);
    res.send("ok");
};

/* Querys */
exports.createNewToken = async (userId, token) => { return await new Token({ 'userId': userId, 'token': token }) }

exports.findAll = async () => { return await User.find().lean(); };

exports.createNewUser = async (values) => { return await new User(values); };

exports.findById = async (id) => { return await User.findById(id) }

exports.findUserByEmail = async (email) => { return await User.findOne({ 'email': email }) }

exports.findUserByUsername = async (username) => { return await User.findOne({ 'username': username }) }