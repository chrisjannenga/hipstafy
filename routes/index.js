var express = require('express');
var app = express();
var router = express.Router();
var snippets = require('../snippets')


function randomIndex(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Hipstafy'
  });
});

router.post('/hipstafy', function(req, res, next) {
  let text = req.body.hipstafy;
  let textArr = text.split(' ');
  //let endArr = textArr.join(snippets[randomIndex(0, snippets.length)]);
  let endArr = "";
  for (var i = 0; i < textArr.length; i++) {
    endArr += textArr[i] + " " + snippets[randomIndex(0, snippets.length)] + " ";
  }
  res.send(endArr);
});

module.exports = router;
