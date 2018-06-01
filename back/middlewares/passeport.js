const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const db = require(`../models/index.js`);
const { comparePassword } = require("./bcryptPassword");
const { secret } = require('../middlewares/jwt');

//New strategy local for connection with passport
passport.use(
  "users",
  new LocalStrategy(
    {
      usernameField: "email", // nom des champs de mon formulaire
      passwordField: "password",
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    (req, email, password, next) => {
      db.users.findOne({ where: { email: email } }).then(user => {
        if (!user) {
          return next(null, false);
        } 
        const checkPass = comparePassword(password, user.password);
        checkPass.then(
          check =>{
            check
              ? next(null, user)
              : next(null, false)
          });
      });
    }
  )
);


// Serialize and Unserialize an User
passport.serializeUser((user, done) => {
  done(null, User)
});

// saved to session req.session.passport.user = {id:'..'}
passport.deserializeUser((user, done) => {
  db.users
    .findOne({
      // Using sequelize model function
      where: {
        id:user.id
      }
    })
    .then(user => {
      if (user === null) {
        done(new Error("Wrong user id."));
      }
      done(null, user); // Standard deserialize callback
    });
});

//Middleware check token 
passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: secret
},
  function (jwtPayload, cb) {
    return cb(null, jwtPayload);
  }
));
