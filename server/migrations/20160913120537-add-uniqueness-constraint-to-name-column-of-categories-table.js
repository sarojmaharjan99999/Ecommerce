'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.changeColumn(
        'Categories',
        'name',
        {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        }
      )
    ];
  },

  // TODO Not dropping constraint
  down: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
        'Categories',
        'name',
        {
          type: Sequelize.STRING,
          allowNull: false,
          unique: false
        }
      );
  }
};
