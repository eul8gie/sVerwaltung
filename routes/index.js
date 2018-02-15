var express = require('express');
var router = express.Router();
const auth = require('../modules/authToolkit');
const secured = auth.secured();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'SchuelerVerwaltung' });
});

router.get('/admin', secured, function(req, res, next) {
    res.send("SECURE AREA");
});

module.exports = router;
