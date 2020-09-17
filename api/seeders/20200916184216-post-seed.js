'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   for (let index = 0; index < 30; index++) {
     await queryInterface.bulkInsert('posts', [{
         name: `Titulo de prueba ${index }`,
         description: `Descripcion de prueba ${index }`,
         createdAt: new Date(),
        updatedAt: new Date()
       }], {})
   }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
