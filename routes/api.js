const express = require('express'),
      router = express.Router(),
      auth = require('../modules/authToolkit'),
      secured = auth.secured();
      
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'SchuelerVerwaltung' });
});

router.put('/admin', secured, function(req, res, next) {
    res.send("SECURE AREA");
});

module.exports = router;
