var express = require("express");
var router = express.Router();
const quoteModel = require("./../models/Quotes.model");

// todo REACT ROUTING
// router.get("/recent", async function (req, res, next) {
//   res.status(200);
// });

//GET oldest quotes
router.get("/oldest", async function (req, res, next) {
  try {
    const listQuotes = await quoteModel.find().sort({ dateCreatedAt: 1 });
    res.status(200).json(listQuotes);
  } catch (err) {
    console.error(err);
  }
});

//GET most-liked
router.get("/most-liked", async function (req, res, next) {
  try {
    const listQuotes = await quoteModel.find().sort({ likes: -1 });
    res.status(200).json(listQuotes);
  } catch (err) {
    console.error(err);
  }
});

//GET most-saved
router.get("/most-saved", async function (req, res, next) {
  try {
    const listQuotes = await quoteModel.find().sort({ favorites: -1 });
    res.status(200).json(listQuotes);
  } catch (err) {
    console.error(err);
  }
});

//GET hashtags
router.get("/tag/:hashtag", async function (req, res, next) {
  try {
    const listQuotes = await quoteModel
      .find({ hashtags: req.params.hashtag })
      .sort({ dateCreatedAt: -1 });
    res.status(200).json(listQuotes);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
