"use strict";

var HttpStatus = require('http-status');
var Promise = require("bluebird");

var models = require("../models/index");
var Brand = models.Brand;

var createBrand = function (brandParams) {
    return new Promise(function (resolve, reject) {
        Brand.create(brandParams)
            .then(function (brandCreated) {
                resolve(brandCreated);
            })
            .catch(function (err) {
                var error = new Error(err.message);
                error.status = HttpStatus.BAD_REQUEST;
                reject(error);
            })
    });

};

module.exports = {
    createBrand: createBrand
};