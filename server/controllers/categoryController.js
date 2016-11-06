"use strict";
var CategoryService = require("../services/categoryService");

var categoryCreate = function (req, res) {
  var categoryParam = req.body;
  CategoryService.createCategory(categoryParam)
    .then(function (categoryCreated) {
      res.json({category: categoryCreated});
    })
    .catch(function (err) {
      res.status(err.status).json({error: {message: err.message}});
    });
};

var categoryListing = function(req, res){
  CategoryService.listCategory()
      .then(function (category) {
        res.json({categories: category});
      })
      .catch(function (err) {
        res.json({error: err.message});
      });
};

var categoryRetrive =  function (req, res) {
  var id = req.params.id;
  models.Category.findById(id)
      .then(function (category) {
        res.json({category: category});
      })
      .catch(function (err) {
        res.json({error: err});
      })

};

var categoryUpdate = function (req, res) {
  var id = req.params.id;
  var categoryParams = req.body;
  models.Category.findById(id)
      .then(function (category) {
        category.updateAttributes(categoryParams)
            .then(function (updatedCategory) {
              res.json({category: updatedCategory});
            })
      })
      .catch(function (err) {
        res.json({error: err});
      })
};

module.exports = {
  categoryCreate: categoryCreate,
  categoryListing: categoryListing,
  categoryUpdate: categoryUpdate,
  categoryRetrive: categoryRetrive
};
