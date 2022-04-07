var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/shopping-list', (req, res, next) => {
  const { ids } = req.query;
  if (!ids) {
    return res.status(400).send();
  }
  const idsArray = ids.split(',');

  const result = recipes.filter((item) =>
    idsArray.includes(item.id.toString())
  );
  if (result.length == 0) {
    return res.status(404).send('NOT_FOUND');
  }
  const arr = [];
  for (let i = 0; i < result.length; i++) {
    arr.push(...result[i].ingredients);
  }
  return res.json(arr);
});
module.exports = router;
