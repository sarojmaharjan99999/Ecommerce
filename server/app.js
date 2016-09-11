"use strict";

var express = require("express");
var app     = express();

var port = 5000;

app.get('/', function (req, res) {
    res.send("Hello world");
});

app.listen(port, function () {
    console.log("Server running at port " + port);
});