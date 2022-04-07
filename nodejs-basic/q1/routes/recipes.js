var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/', (req, res, next) => {
  const { page, limit } = req.query;
  const pageItem = parseInt(page) || 1;
  const limitItem = parseInt(limit) || 3;
  const skip = (pageItem - 1) * limitItem;
  // const result = [];
  const totalItem =
    skip + limitItem < recipes.length ? skip + limitItem : recipes.length;
  // for (let i = skip; i < totalItem; i += 1) {
  //   result.push(recipes[i]);
  // }
  const result = recipes.slice(skip, skip + limitItem);
  console.log(result);

  return res.json(result);
});

module.exports = router;
