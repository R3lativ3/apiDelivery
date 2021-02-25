var express = require('express');
var router = express.Router();
const mysqlConnection = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
    mysqlConnection.query('select * from ordenes', (err, rows, fields) =>{
        if(err) throw err;
        res.json(rows);
    });
});

module.exports = router;
