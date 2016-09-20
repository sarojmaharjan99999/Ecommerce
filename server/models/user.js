'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      indexes: [
        { name: 'Users_email_key', unique: true, fields: [sequelize.fn('lower', sequelize.col('email'))] }
      ]
    },
    timestamps: true
  });
  return User;
};