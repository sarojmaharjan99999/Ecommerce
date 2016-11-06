'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addIndex(
        'Categories',
        [Sequelize.fn('lower', Sequelize.col('name'))],
        {
          indexName: 'uniqueName',
    	    indicesType: 'UNIQUE'
        }
      )
    ];
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeIndex('Categories', 'uniqueName')
  }
};
