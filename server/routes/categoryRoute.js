"use strict";

var express = require("express");
var route     = express.Router();

var CategoryController = require('../controllers/categoryController');

route.post('/categories', CategoryController.categoryCreate);
route.get('/categories', CategoryController.categoryListing);

module.exports = route;