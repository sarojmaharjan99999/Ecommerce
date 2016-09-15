'use strict';
module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      indexes: [
        { name: 'uniqueName', unique: true, fields: [sequelize.fn('lower', sequelize.col('name'))] }
      ]
   },
    timestamps : true
  });
  return Category;
};
