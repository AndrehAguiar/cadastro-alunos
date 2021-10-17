const bcryptjs = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert(
       'users',
       [
         {
            name: 'John Doe',
            email: 'john@email.com',
            password_hash: await bcryptjs.hash('123456', 8),
            created_at:new Date(),
            updated_at:new Date()
          },
          {
             name: 'John Doe 1',
             email: 'john1@email.com',
             password_hash: await bcryptjs.hash('123456', 8),
             created_at:new Date(),
             updated_at:new Date()
           },
           {
              name: 'John Doe 2',
              email: 'john2@email.com',
              password_hash: await bcryptjs.hash('123456', 8),
              created_at:new Date(),
              updated_at:new Date()
            },
        ],
        {}
      );
  },

  down: async () => {}
};
