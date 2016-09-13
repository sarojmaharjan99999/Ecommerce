"use strict";

var express = require("express");
var route     = express.Router();

var CategoryController = require('../controllers/categoryController');

route.post('/categories', CategoryController.categoryCreate);

module.exports = route;