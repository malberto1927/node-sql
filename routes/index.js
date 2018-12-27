var express = require('express');
var router = express.Router();
var db = require('../db/config')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.serialize(function() {
    db.run('CREATE TABLE lorem (info TEXT)');
    var stmt = db.prepare('INSERT INTO lorem VALUES (?)');

    for (var i = 0; i < 10; i++) {
      stmt.run('Ipsum ' + 1);
    }

    stmt.finalize();

    db.each('SELECT rowid as id, info FROM lorem', function(err, row) {
      console.log(row.id + ': ' + row.info);
    });
  });

  db.close();

  res.render('index', { title: 'Express' });
});

module.exports = router;
