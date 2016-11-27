"use strict";

var express = require("express");
var route     = express.Router();

var CategoryController = require('../controllers/categoryController');

route.get('/categories', CategoryController.categoryListing);
route.post('/categories', CategoryController.categoryCreate);
route.get('/categories/:id', CategoryController.categoryRetrive);
route.put('/categories/:id', CategoryController.categoryUpdate);

module.exports = route;