"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("order_products", {
      id_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_product: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      qty: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("order_products");
  },
};
