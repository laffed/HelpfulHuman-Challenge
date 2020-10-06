const express = require('express');
const router = express.Router();
const getHues = require('../helpers/getHues');
const ranHexStringArr = require('../Data/ranColorData');


router.get('/api/colors/:page', (req, res, next) => {
  const page = req.params.page;
  const perPage = 12;
  const pageCount = Math.ceil(360 / perPage); // ranHexStringArr.length === 360

  if (page < 1) page = 1;
  if (page > pageCount) page = pageCount;

  const from = 360 - ((page - 1) * perPage) - 1;
  let to = 360 - (page * perPage);
  if (to < 0) to = 0;

  return res.status(200).json({
    colors: ranHexStringArr.slice(from, to).reverse()
  });
});

router.get('/api/random-color', (req, res, next) => {
  const index = Math.floor(Math.random() * 360);
  const ranColor = ranHexStringArr[index];
  const huesArr = getHues(ranColor);
  return res.status(200).json({
    data: huesArr
  });
});

router.get('/api/color-detail/:hex', (req, res, next) => {
  const hex = req.params.hex;
  const huesArr = getHues(hex);
  return res.status(200).json({
    data: huesArr
  });
});

module.exports = router;