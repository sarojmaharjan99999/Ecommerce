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

module.exports = {
  categoryCreate: categoryCreate
};