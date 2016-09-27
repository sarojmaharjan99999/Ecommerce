"use strict";

var express = require("express");
var route     = express.Router();

var brandController = require('../controllers/brandController');

route.post('/brand', brandController.brandCreate);
route.get('/brand', brandController.brandListing);
route.get('/brand/:id', brandController.brandRetrive);
route.put('/brand/:id', brandController.brandUpdate);

module.exports = route;