const  http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();
const port = process.env.PORT || 3000;


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());

//Serve Static Files in public folder
app.use(express.static(__dirname  +  '/public'));


const auth = require('./routes/auth');

//routes for api
app.use("/auth", auth);

app.listen(port, err => {
  if(err) console.log(err);
  console.clear();
  console.log(`Server Listen on port ${port}`);
})
