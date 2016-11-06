"use strict";

var HttpStatus = require('http-status');
var Promise = require("bluebird");

var models = require("../models/index");
var Category = models.Category;

var createCategory = function (categoryParams) {
    return new Promise(function (resolve, reject) {
        Category.create(categoryParams)
            .then(function (categoryCreated) {
                resolve(categoryCreated);
            })
            .catch(function (err) {
                var error = new Error(err.message);
                error.status = HttpStatus.BAD_REQUEST;
                reject(error);
            })
    });

};

var listCategory = function ( ) {
    return new Promise(function (resolve, reject) {
        Category.findAll( )
            .then(function (categories) {
                resolve(categories);
            })
            .catch(function (err) {
                var error = new Error(err.message);
                error.status = HttpStatus.BAD_REQUEST;
                reject(error);
            })
    });

};

module.exports = {
    createCategory: createCategory,
    listCategory: listCategory
};