var express = require('express');
var router = express.Router();
var passport = require("passport");

router.post("/register", passport.authenticate("localRegister", {
        successRedirect: "",
        passReqToCallback: true,
    }
));

module.exports = router;
