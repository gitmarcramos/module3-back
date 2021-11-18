require("dotenv").config();
require("./config/mongodb");
require("./config/cloudinary");
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
app.use(express.static(path.join(__dirname, "public/build")));

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

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));



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
app.use("/", function (req, res, next) {
  res.redirect('/api/home')
});

// To handle
app.use("/*", (req, res, next) => {
  res.redirect("/")
})


/* -------------------------------------------------------------------------- */
/*                                      DEPLOY STUFF                          */
/* -------------------------------------------------------------------------- */
// 404 Middleware
app.use("/api/*", (req, res, next) => {  
  const error = new Error("Ressource not found.");
  error.status = 404;
  next(error);
});

if (process.env.NODE_ENV === "production") {
  app.use("*", (req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(path.join(__dirname, "public/build/index.html"));
  });
}
/* -------------------------------------------------------------------------- */
/*                                      DEPLOY STUFF                          */
/* -------------------------------------------------------------------------- */



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
