"use strict";

var express = require("express");
var route     = express.Router();

var productController = require('../controllers/productController');

route.post('/products', productController.productCreate);

module.exports = route;