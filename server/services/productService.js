"use strict";

var HttpStatus = require('http-status');
var Promise = require("bluebird");

var models = require("../models/index");
var Product = models.Products;

var createProduct = function (productParams) {
    return new Promise(function (resolve, reject) {
        Products.create(productParams)
            .then(function (productCreated) {
                resolve(productCreated);
            })
            .catch(function (err) {
                var error = new Error(err.message);
                error.status = HttpStatus.BAD_REQUEST;
                reject(error);
            })
    });

};

var listProduct = function () {
    return new Promise(function (resolve, reject) {
        models.Products.findAll()
            .then(function (products) {
                resolve(products);
            })
            .catch(function (err) {
                reject(err);
            })
    });
};

var retriveProduct = function (id) {
    return new Promise(function (resolve, reject) {
        models.Products.findAll(id)
            .then(function (products) {
                resolve(products);
            })
            .catch(function (err) {
                reject(err);
            })
    });
};

var updateProduct = function () {
    var id = req.params.id;
    var productParams = req.body;
    return new Promise(function (resolve, reject) {
        models.Products.findById(id)
            .then(function (product) {
                product.updateAttributes(productParams)
                    .then(function (updatedproducts) {
                        res.json({product: updatedproducts});
                    })
            })
            .catch(function (err) {
                res.json({error: err});
            })
    });
};

module.exports = {
    createProduct: createProduct,
    listProduct: listProduct,
    retriveProduct: retriveProduct,
    updateProduct: updateProduct
};