var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'ui')));
app.use('/', express.static(path.resolve(__dirname, 'ui')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api/', require('./api/routes'));

app.listen(7546);