var passport = require('passport')
var FacebookStrategy = require('passport-facebook').Strategy;
var LocalStrategy = require('passport-local').Strategy;
var userController = require('../controllers/userController.js')

passport.serializeUser((user, done) => { done(null, user.id); });

passport.deserializeUser(async (id, done) => {
  const user = await userController.findById(id)
  done(null, user);
});

passport.use('localRegister', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await userController.findUserByEmail(email)
  if (user) return done(null, false);
  else {
    console.log(req.body);
    done(null, req.body);
  }
}));

passport.use('facebook', new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  passReqToCallback: true,
  callbackURL: process.env.FACEBOOK_CALLBACK,
  profileFields: ['displayName', 'name', 'picture.type(large)', 'email']
},
  async (req, accessToken, refreshToken, profile, done) => {
    const email = profile.emails[0].value
    const username = profile.name.givenName + profile.name.familyName
    var user = await userController.findUserByEmail(email)
    if (!user) {
      const newUser = await userController.createNewUser({
        username: username,
        password: '1234',
        email: email,
        isVerified: true,
      })
      await newUser.save()
      user = newUser
    }
    done(null, user)
  }
));

passport.use('login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},
  async (req, username, password, done) => {
    const targetUser = await userController.findUserByUsername(username)
    if (!targetUser) return done(null, false);
    if (password != targetUser.password) return done(null, false);
    return done(null, targetUser);
  }
));
