var recipesRoute = require('./recipes');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('<p>HTML Data</p>');
});
router.use('/recipes', recipesRoute);

module.exports = router;
