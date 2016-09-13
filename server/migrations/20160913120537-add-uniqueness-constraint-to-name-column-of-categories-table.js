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
        },
        {
          indexes: [
            { name: 'unique_name', unique: true, fields: [sequelize.fn('lower', sequelize.col('name'))] }
          ]
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

var Model = sequelize.define('Company', {
  name: {
    type: DataTypes.STRING
  }
}, {
  indexes: [
    { name: 'unique_name', unique: true, fields: [sequelize.fn('lower', sequelize.col('name'))] }
  ]
});
