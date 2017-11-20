var express = require('express');
const path = require('path');
var router = express.Router();


var mongojs = require('mongojs');
var db = mongojs('mongodb://bozena:bozena6@ds113936.mlab.com:13936/englishwords',['word']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// router.get('/test', function(req, res, next) {
//   res.render('test', { title: 'Express' });
// });


router.get('/test', function (req,res) {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});


router.get('/method', function (req,res) {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

router.get('/login', function (req,res) {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

router.get('/costam', function (req,res) {
  db.word.find(function (err, word)
  {
      res.json(word);
  });
});

module.exports = router;
