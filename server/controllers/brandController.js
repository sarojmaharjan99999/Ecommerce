"use strict";
var brandService = require("../services/brandService");

var brandCreate = function (req, res) {
    var brandParam = req.body;
    brandService.createBrand(brandParam)
        .then(function (brandCreated) {
            res.json({brand: brandCreated});
        })
        .catch(function (err) {
            res.status(err.status).json({error: {message: err.message}});
        });
};


var brandListing = function(req, res){
    brandService.brandL()
        .then(function (brand) {
            res.json({brands: brand});
        })
        .catch(function (err) {
            res.json({error: err.message});
        });
};

var brandRetrive =  function (req, res) {
    var id = req.params.id;
    models.Brand.findById(id)
        .then(function (customer) {
            res.json({customer: customer});
        })
        .catch(function (err) {
            res.json({error: err});
        })

};

var brandUpdate = function (req, res) {
    var id = req.params.id;
    var brandParams = req.body;
    models.Brand.findById(id)
        .then(function (brand) {
            brand.updateAttributes(brandParams)
                .then(function (updatedBrand) {
                    res.json({brand: updatedBrand});
                })
        })
        .catch(function (err) {
            res.json({error: err});
        })
};

module.exports = {
    brandCreate: brandCreate,
    brandListing: brandListing,
    brandUpdate: brandUpdate,
    brandRetrive: brandRetrive
};