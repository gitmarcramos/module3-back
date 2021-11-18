require("dotenv").config();
require("./config/mongodb");
require("./config/cloudinary");
require("./config/passport");
const createError = require("http-errors");
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const MongoStore = require("connect-mongo");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const hbs = require("hbs");
const flash = require("connect-flash");
const passport = require("passport")
const _DEVMODE = false;


const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static("public"));

hbs.registerPartials(__dirname + "/views/partials");
require("./helpers/hbs.js");


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }, // in millisec
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
      ttl: 24 * 60 * 60, // 1 day
    }),
    saveUninitialized: true,
    resave: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//------------------------------------------
// Check Loggedin Users
// ------------------------------------------
if (_DEVMODE === true) {
  app.use(function devMode(req, res, next) {
    req.user = {
      _id: "61962d33381b350c4f8b4967",
      pseudo: "MarcWeb",
      name: "Marc",
      mail: "marc@mail.com",
      avatar:
        "https://res.cloudinary.com/awesome-quotes/image/upload/v1635413379/samples/Awesome%20quotes/default_profile_image_e7mvln.png",
      role: "admin",
      followers: [],
      following: [],
      likes: [],
      favorites: []
    };

    next();
  });
}

app.use(flash());

app.use(require("./middlewares/exposeLoginStatus"));
app.use(require("./middlewares/exposeFlashMessage"));

const indexRouter = require("./routes/index.routes");
const usersRouter = require("./routes/users.routes");
const authRouter = require("./routes/auth.routes");
const filterRouter = require("./routes/filter.routes");
const quoteRouter = require("./routes/quotes.routes")

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/filter", filterRouter);
app.use("/api/quotes", quoteRouter)


// To handle
app.use("/*", (req, res, next) => {
  res.redirect("/")
})


// SESSION SETUP

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

module.exports = app
