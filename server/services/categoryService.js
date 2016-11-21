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
var listCategory = function () {
    return new Promise(function (resolve, reject) {
        models.Category.findAll()
            .then(function (categorys) {
                resolve(categorys);
            })
            .catch(function (err) {
                reject(err);
            })
    });
};

var retriveCategory = function (id) {
    return new Promise(function (resolve, reject) {
        models.Category.findAll(id)
            .then(function (categorys) {
                resolve(categorys);
            })
            .catch(function (err) {
                reject(err);
            })
    });
};

var updateCategory = function (req) {
    var id = req.params.id;
    var categoryParams = req.body;
    return new Promise(function (resolve, reject) {
        Category.findById(id)
            .then(function (category) {
                category.updateAttributes(categoryParams)
                    .then(function (updatedcategory) {
                        resolve(updatedcategory)
                    })
            })
            .catch(function (err) {
                reject(err);
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
    listCategory: listCategory,
    retriveCategory: retriveCategory,
    updateCategory: updateCategory
};