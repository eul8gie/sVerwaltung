const express = require('express'),
      router = express.Router(),
      auth = require('../modules/authToolkit'),
      secured = auth.secured(),
      db = require("../modules/dbToolkit");
      
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'SchuelerVerwaltung' });
});
/* jshint ignore:start */
router.put('/:id', async (req, res, next) => {
    try {
        console.log(req.body);
        console.log(req.params.id);
        res.end();
        // res.send(await db.addSchueler(res.body))
    } catch (e) {
        res.status(505).json(e);
    }
});

module.exports = router;
