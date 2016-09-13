var express = require("express");
var route     = express.Router();

var models = require('../models/index');

route.get('/categories', categoryController.catL);

module.exports = route;