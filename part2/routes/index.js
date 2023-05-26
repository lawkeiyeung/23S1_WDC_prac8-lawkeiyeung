var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/actors', function(req, res, next) {
  req.pool.getConnection(function(err,connection){
    if (err) {
      res.sendStatus(502);
      return;
    }
    let sql = "SELECT last_name, first_name FROM actor;";
    connection.query(sql, function(cerr, rows, fields) {
      if (cerr) {
        res.sendStatus(501);
        return;
      }
      res.send(rows);
    });
  });
});

router.post('/actoradd', function(req, res, next) {
  req.pool.getConnection(function(err,connection){
    if (err) {
      res.sendStatus(500);
      return;
    }
    let sql = "insert into actor (first_name,last_name) values ('"+req.body.firstName+"','"+req.body.lastName+"')";
    connection.query(sql, function (cerr, rows, fields) {
      if (cerr) {
        res.sendStatus(500);
      }
    });
    res.send();
  });
});
module.exports = router;
