var express = require('express');
var router = express.Router();
var re = require('./recipes');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('<p>HTML Data</p>');
});

router.use('/recipes/', re);

module.exports = router;
