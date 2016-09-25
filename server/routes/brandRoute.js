"use strict";

var express = require("express");
var route     = express.Router();

var brandController = require('../controllers/brandController');

route.post('/brand', brandController.brandCreate);
route.get('/brand', brandController.brandListing);

module.exports = route;