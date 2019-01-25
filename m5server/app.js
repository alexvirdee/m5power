require("dotenv").config();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var cors = require('cors');

// socket.io configuration
var http = require('http').Server(app);
var io = require('socket.io')(http);



require('./configs/passport-config');

// local connection
mongoose.connect('mongodb://localhost/M5power');

// deploy connection
// mongoose.connect(process.env.MONGODB_URI);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Add session 
app.use(session({
  secret:"M5POWER",
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    credentials: true,                 // allow other domains to send cookies
    origin: ["http://localhost:4200", "http://localhost:8888"]  // these are the domains that are allowed
  })
);


// ========== Routing ==========================
var index = require('./routes/index');
app.use('/', index);

var authRoutes = require("./routes/auth-routes");
app.use("/auth", authRoutes);

var mcarRoutes = require("./routes/mcars-routes");
app.use("/", mcarRoutes);

var postRoutes = require("./routes/post-routes");
app.use("/", postRoutes);

// ==============================================


app.use((req, res, next) => {
  // If no routes match, send user to Angular HTML page.
  res.sendFile(__dirname + "/public/index.html");
});



module.exports = app;
