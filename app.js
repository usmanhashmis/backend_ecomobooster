var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
require('dotenv').config();
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var categoriesRouter = require("./routes/categories");
var adminRouter = require("./routes/admin");
var pricesRouter = require("./routes/prices");
var orderrRouter = require("./routes/orderr");

var addressRouter = require("./routes/address");
var msgRouter = require("./routes/msg");
var giftoffRouter = require("./routes/giftoff");

var app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE"],
  })
);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);
app.use("/admin",adminRouter);
app.use("/prices",pricesRouter);
app.use("/orderr",orderrRouter);
app.use("/address",addressRouter);
app.use("/msg",msgRouter);
app.use("/giftoff",giftoffRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

mongoose
.connect(process.env.ADMIN_URI,{  
    useUnifiedTopology: true,
    })
  .then(() => {
    console.log("connect succes");
  
  })
  .catch((err) => {
    if(err){ console.error(err); return false;}
    console.log("error:",err);
  });

  app.set('port', process.env.PORT || 3000)
    app.listen(app.get('port'), () => {
      console.log(`Port: ${app.get('port')}`);
  })
 
module.exports = app;
