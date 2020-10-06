const express = require('express');
const router = express.Router();
const getHues = require('../helpers/getHues');
const ranHexStringArr = require('../Data/ranColorData');

router.get('/', (req, res, next) => {
  console.log('ok');
  res.send("Hello World");
});

router.get('/api/colors/:page', (req, res, next) => {
  let page = req.params.page;
  const perPage = 12;
  const pageCount = Math.ceil(360 / perPage); // ranHexStringArr.length === 360

  if (page < 1) page = 1;
  if (page > pageCount) page = pageCount;

  let from = 360 - (page * perPage);
  let to = 360 - ((page - 1) * perPage);
  if (from < 0) from = 0;
  if (to < 11) to = 11;

  const colors = ranHexStringArr.slice(from, to);
  return res.status(200).json({
    data: colors
  });
});

router.get('/api/random-color', (req, res, next) => {
  const index = Math.floor(Math.random() * 360);
  const ranColor = ranHexStringArr[index];
  return res.status(200).json({
    data: ranColor
  });
});

router.get('/api/color-detail/:hex', (req, res, next) => {
  const hex = req.params.hex;
  console.log(hex);
  const huesArr = getHues(hex);
  return res.status(200).json({
    data: huesArr
  });
});

module.exports = router;