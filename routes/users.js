var express = require('express');
var router = express.Router();
var snippets = require('../snippets')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(snippets[4]);
});

module.exports = router;
