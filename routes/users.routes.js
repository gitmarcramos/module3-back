var express = require("express");
const quoteModel = require("../models/Quotes.model");
var router = express.Router();
const userModel = require("./../models/Users.model");
const protectUserRoute = require("./../middlewares/protectUserRoute");
const fileUploader = require("./../config/cloudinary");

//! DO NOT FORGET TO PUT BACK THE PROTECT ROUTE MIDDLEWARE

/* ------------------------------ // GET users ------------------------------ */
router.get("/", (req, res, next) => {
  //todo REACT ROUTING
});

/* ----------------------------- //GET ONE USER ----------------------------- */
router.get("/:pseudo", async (req, res, next) => {
  try {
    const user = await userModel.findOne({
      pseudo: { $regex: new RegExp(req.params.pseudo, "i") },
    });
    const listQuotes = await quoteModel
      .find({ publisher: user._id })
      .sort({ dateCreatedAt: -1 })
      .populate("publisher");
    // console.log(user, listQuotes);
    res.status(200).json({ user, listQuotes });
  } catch (error) {
    next(error);
  }
});

/* ---------------------- //PATCH update USER INFOS route --------------------- */
router.patch("/:pseudo/edit", async (req, res, next) => {
  try {
    const foundUser = await userModel.findOne({ pseudo: req.params.pseudo });
    res.status(200).json(foundUser);
  } catch (err) {
    console.log(err, "There was an error finding the user to update");
  }
});

/* --------------------- // POST update USER INFOS route -------------------- */
router.post(
  "/:pseudo/edit",
  fileUploader.single("profilePic"),
  async (req, res, next) => {
    try {
      if (req.file) {
        updateUser.profilePic = req.file.path;
      }
      const updateUser = await userModel.findOneAndUpdate(
        req.params.pseudo,
        req.body,
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (err) {
      console.log(err, "There was an error updating your account");
    }
  }
);

/* ----------------------------- // DELETE USER ----------------------------- */
router.get("/:pseudo/delete", protectUserRoute, async (req, res, next) => {
  try {
    const deletedUser = await userModel.findOneAndDelete({
      _id: req.session.currentUser._id,
    });
    res.status(200).json(deletedUser);
  } catch (err) {
    console.log(err, "There was an error finding the user to delete");
  }
});

module.exports = router;
