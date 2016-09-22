'use strict';
module.exports = function(sequelize, DataTypes) {
  var Brand = sequelize.define('Brand', {
    name: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.Brand.belongsTo(models.Category);
      }
    }
  });
  return Brand;
};