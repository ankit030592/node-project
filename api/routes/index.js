var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send({
        message: "Welcome, but you are not supposed to be here.!"
    });
});

var skills = require('./skill.server.routes');

router.use('/skills/', skills);

module.exports = router;
