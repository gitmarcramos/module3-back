const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const userModel = require("./../models/Users.model");
const protectAuthRoute = require("./../middlewares/protectAuthRoute");
const fileUploader = require('./../config/cloudinary');
const passport = require("passport");

//! PUT BACK PROTECT ROUTE MIDDLEWARE

router.get("/", function (req, res, next) {
  res.status(200).json({ message: "Auth page home" })
});


router.post("/logout", (req, res, next) => {
  req.logout(); // utility function provided by passport
  res.status(200).json({ message: "Successfully logged out" });
});


// POST login page
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, failureDetails) => {
    if (err || !user) return res.status(403).json({ failureDetails }); // 403 : Forbidden

    /**
     * req.Login is a passport method
     * check the doc here : http://www.passportjs.org/docs/login/
     */
    req.logIn(user, function (err) {
      /* doc says: When the login operation completes, user will be assigned to req.user. */
      if (err) {
        return res.json({ message: "Something went wrong logging in" });
      }

      // We are now logged in
      // You may find usefull to send some other infos
      // dont send sensitive informations back to the client
      // let's choose the exposed user below
      const { _id, pseudo, name, mail, profilePic, role } = user;
      // and only expose non-sensitive inofrmations to the client's state
      next(
        res.status(200).json({
          currentUser: {
            _id,
            pseudo,
            name,
            mail,
            profilePic,
            role,
          },
        })
      );
    });
  })(req, res, next); // IIFE (module) pattern here (see passport documentation)
});



// todo REACT 
//GET create-account page
// router.get("/create-account", protectAuthRoute, function (req, res, next) {
//   res.render("auth/create-account");
// });


// POST create-account page
// router.post("/create-account", protectAuthRoute, fileUploader.single('profilePic'), async (req, res, next) => {
//   try {
//     const newUser = { ...req.body };

//     // check if profil pic is uploaded by user
//     if(req.file){
//       newUser.profilePic = req.file.path
//     }

//     const foundUser = await userModel.findOne({ mail: newUser.mail });

//     // console.log(newUser);
//     if (foundUser) {
//       req.flash("warning", "Email already registered");
//       res.redirect("/auth/create-account");
//     } else {
//       const hashedPassword = bcrypt.hashSync(newUser.password[0], 10);
//       newUser.password = hashedPassword;
//       newUser.creationDate = new Date(Date.now());
//       // console.log(newUser);
//       await userModel.create(newUser);
//       req.flash("success", "Congrats ! You are now registered !");
//       res.redirect("/auth/login");
//     }
//   } catch (err) {
//     let errorMessage = "";
//     for (field in err.errors) {
//       errorMessage += err.errors[field].message + "\n";
//     }
//     req.flash("error", errorMessage);
//     res.redirect("/auth/create-account");
//   }
// });

const minPasswordLength = 4;

/*
  learn more about session, cookies, token here =>
  https://www.youtube.com/watch?v=2PPSXonhIck&t=1809s
*/

// more on HTTP status
// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

router.post("/create-account", fileUploader.single("profilePic"), (req, res, next) => {
  // console.log("file ?", req.file);
  // console.log(req.body);
  let errorMsg = "";
  const { mail, password, pseudo, name } = req.body;
  // @todo : best if email validation here or check with a regex in the User model
  if (!password || !mail) errorMsg += "Provide email and password.\n";

  if (password.length < minPasswordLength)
    errorMsg += `Please make your password at least ${minPasswordLength} characters.`;

  if (errorMsg) return res.status(403).json(errorMsg); // 403	Forbidden

  const salt = bcrypt.genSaltSync(10);
  // more on encryption : https://en.wikipedia.org/wiki/Salt_(cryptography)
  const hashPass = bcrypt.hashSync(password, salt);

  const newUser = {
    pseudo,
    name,
    mail,
    password: hashPass,
  };

  // check if an avatar FILE has been posted
  if (req.file) newUser.profilePic = req.file.secure_url;

  newUser.creationDate = new Date(Date.now());

  userModel
    .create(newUser)
    .then(() => {
      res.status(200).json({ msg: "signup ok" });
    })
    .catch((err) => {
      console.log("signup error", err);
      next(err);
    });
});

router.delete("/create-account", (req, res, next) => {
  userModel
    .findOneAndDelete({pseudo: req.body.pseudo})
    .then(() => {
      req.logout();
      res.status(200).json({ msg: "delete ok" });
    })
    .catch((err) => {
      console.error("delete account error", err);
      next(err);
    });
})


module.exports = router;
