const express = require("express");
const router = express.Router();
const quoteModel = require("./../models/Quotes.model");


//todo REACT 
/* GET index page. */
// router.get("/", function (req, res, next) {
//   res.status(200)
// });

/* ---------------------------- // GET home page ---------------------------- */
router.get("/home", async function (req, res, next) {
  try {
    const listQuotes = await quoteModel
      .find()
      .sort({ dateCreatedAt: -1 })
      .populate("publisher");

    res.status(200).json(listQuotes);
  } catch (err) {
    console.error(err);
  }
});


// todo React Routing
// router.get("/filter", function (req, res, next) {
//   res.status(200)
// });




// todo React Routing
//GET About Page
// router.get("/about", function (req, res, next) {
//   res.status(200)
// });

module.exports = router;
