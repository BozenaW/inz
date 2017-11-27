var express = require('express');
var sessions = require('express-session');


const path = require('path');
var router = express.Router();


var mongojs = require('mongojs');
var db = mongojs('mongodb://bozena:bozena6@ds113936.mlab.com:13936/englishwords',['word']);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/method', function (req,res) {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

router.get('/login', function (req,res) {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

router.get('/test', function (req,res) {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

router.get('/register', function (req,res) {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

router.get('/method', function (req,res) {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});

router.get('/method/*', function (req,res) {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'));
});
//
// router.get('/method/2', function (req,res) {
//   res.sendFile(path.join(__dirname, '../public/', 'index.html'));
// });
//
// router.get('/method/3', function (req,res) {
//   res.sendFile(path.join(__dirname, '../public/', 'index.html'));
// });
//
// router.get('/method/4', function (req,res) {
//   res.sendFile(path.join(__dirname, '../public/', 'index.html'));
// });
//
// router.get('/method/5', function (req,res) {
//   res.sendFile(path.join(__dirname, '../public/', 'index.html'));
// });

// router.get('/login', function (req,res) {
//   db.word.find(function (err, word)
//   {
//      res.json(word);
//
//   });
// });

router.post('/api/login', function (req,res) {
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  db.users.findOne({login:username, password:password}, function (err, user) {
    if(err){
      console.log(err);
      return  res.status(500).send();
    }
    else if (user){
      res.send({status: 'Success'});
    }
    else{
      res.send({status: 'fail'});
    }
  })
});

router.post('/api/register', function (req, res) {
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  db.users.findOne({login:username}, function (err, user) {
    if(user){
      res.send({status: 'Fail'});
    }
    else{
      res.send({status: 'Success'});
      db.users.insert({login:username, password:password})
    }
  })
});

router.get('/api/met1', function (req, res) {

  db.word.findOne({"type":"fruit" },function (err, fruit)
  {
    console.log(err);
    console.log(fruit);
  });
});


module.exports = router;
