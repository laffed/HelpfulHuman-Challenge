var express = require('express');
var router = express.Router();


router.get('/api/random-color', (req, res, next) => {
  res.send('ok');
  //Generate random color, send back hex code and hues
});

module.exports = router;