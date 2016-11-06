"use strict";

var bodyParser = require('body-parser');
var express = require("express");
var fs = require("fs");
var path = require("path");
var app     = express();

var port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
});

app.get('/', function (req, res) {
    res.send("Hello world");
});

app.get('/heroes', function (req, res) {
    var heroes = [
        {id: 11, name: 'Mr. Nice'},
        {id: 12, name: 'Narco'},
        {id: 13, name: 'Bombasto'},
        {id: 14, name: 'Celeritas'},
        {id: 15, name: 'Magneta'},
        {id: 16, name: 'RubberMan'},
        {id: 17, name: 'Dynama'},
        {id: 18, name: 'Dr IQ'},
        {id: 19, name: 'Magma'},
        {id: 20, name: 'Tornado'}
    ];
    res.json(heroes);
});

var routersPath = path.join (__dirname, "routes");
fs.readdirSync(routersPath).forEach(function (file) {
    app.use(require("./routes/" + file));
});

app.listen(port, function () {
    console.log("Server running at port " + port);
});
