'use strict';

module.exports = {

    up: function (queryInterface, Sequelize) {

        return queryInterface.bulkInsert('Users', [
                {
                    username: 'John123'
                    ,email: 'john123@mail.com'
                    ,password: '123456'
                    ,role: 0
                    ,status: 1
                    ,createdAt: new Date()
                    ,updatedAt: new Date()
                }
            ],
            {});
    },

    down: function (queryInterface, Sequelize) {

        return queryInterface.bulkDelete('Users', null, {});

    }
};







