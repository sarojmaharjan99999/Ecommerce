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

var listBrand = function () {
    return new Promise(function (resolve, reject) {
        models.Brand.findAll()
            .then(function (brands) {
                resolve(brands);
            })
            .catch(function (err) {
                reject(err);
            })
    });
};

var retriveBrand = function (id) {
    return new Promise(function (resolve, reject) {
        models.Brand.findAll(id)
            .then(function (brands) {
                resolve(brands);
            })
            .catch(function (err) {
                reject(err);
            })
    });
};

var updateBrand = function () {
    var id = req.params.id;
    var brandParams = req.body;
    return new Promise(function (resolve, reject) {
        models.Brand.findById(id)
            .then(function (brand) {
                brand.updateAttributes(brandParams)
                    .then(function (updatedBrands) {
                        res.json({brand: updatedBrands});
                    })
            })
            .catch(function (err) {
                res.json({error: err});
            })
    });
};

module.exports = {
    createBrand: createBrand,
    listBrand: listBrand,
    retriveBrand: retriveBrand,
    updateBrand: updateBrand
};