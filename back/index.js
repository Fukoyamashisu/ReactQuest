const  http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const session = require('express-session');
const  morgan  =  require('morgan');
const  app  =  express();
const passport = require('passport');
const port = process.env.PORT || 5000;


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());

/**
 * Configuration of Session
 */
app.use(
  session({
    secret: "*****helloEverybody*****",
    saveUninitialized: true,
    resave: true,
    cookie: {
      maxAge: 100 * 60 * 60 * 24 * 30
    } // lifetime of cookie = 30 days
  })
);

//Serve Static Files in public folder
app.use(express.static(__dirname  +  '/public'));


//Strategy Auth
require('./middlewares/passeport');

// Middleware pour des messages flash
app.use((request, response, next) => {
  if (request.session.flash) {
    response.locals.flash = request.session.flash;
    request.session.flash = undefined;
  }

  request.flash = (type, content) => {
    if (request.session.flash === undefined) {
      request.session.flash = {};
    }
    request.session.flash[type] = content;
  };

  next();
});

const auth = require('./routes/auth');

//routes for api
app.use("/auth", auth);


app.get("/profile", passport.authenticate('jwt', { session: false }), function (req, res) {
  res.send(req.user);
})

app.listen(port, err => {
  if(err) console.log(err);
  console.clear();
  console.log(`Server Listen on port ${port}`);
})
