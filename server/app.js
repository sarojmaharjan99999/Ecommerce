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

var routersPath = path.join (__dirname, "routes");
fs.readdirSync(routersPath).forEach(function (file) {
    app.use(require("./routes/" + file));
});

app.listen(port, function () {
    console.log("Server running at port " + port);
});
