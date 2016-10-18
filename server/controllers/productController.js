"use strict";
var productService = require("../services/productService");

var productCreate = function (req, res) {
    var productParam = req.body;
    productService.createProduct(productParam)
        .then(function (productCreated) {
            res.json({product: productCreated});
        })
        .catch(function (err) {
            res.status(err.status).json({error: {message: err.message}});
        });
};

var productListing = function(req, res){
    productService.listProduct()
        .then(function (product) {
            res.json({products: product});
        })
        .catch(function (err) {
            res.json({error: err.message});
        });
};

var productRetrive =  function (req, res) {
    var id = req.params.id;
    models.Products.findById(id)
        .then(function (product) {
            res.json({product: product});
        })
        .catch(function (err) {
            res.json({error: err});
        })

};

var productUpdate = function (req, res) {
    var id = req.params.id;
    var productParams = req.body;
    models.Products.findById(id)
        .then(function (product) {
            product.updateAttributes(productParams)
                .then(function (updatedproduct) {
                    res.json({product: updatedproduct});
                })
        })
        .catch(function (err) {
            res.json({error: err});
        })
};

module.exports = {
    productCreate: productCreate,
    productListing: productListing,
    productUpdate: productUpdate,
    productRetrive: productRetrive
};
