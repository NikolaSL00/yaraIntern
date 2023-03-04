"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Order, { foreignKey: "id_order" });
      this.belongsTo(models.Product, { foreignKey: "id_product" });
    }
  }
  order_products.init(
    {
      id_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "order_products",
      underscored: true,
      freezeTableName: true,
    }
  );
  return order_products;
};
