var express = require('express');
var router = express.Router();
const mysqlConnection = require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
    mysqlConnection.query('select * from RestauranteUser', (err, rows, fields) =>{
        if(err) throw err;
        res.json(rows);
    });
});

router.get('/:id', function(req, res) {
    const { id } = req.params;
    mysqlConnection.query('select * from productosx where idRestaurante = ?' ,id, (err, rows, fields) =>{
        if(err) throw err;
        res.json(rows);
    });
});

module.exports = router;


