"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: "id_user" });
      this.hasMany(models.order_products, { foreignKey: "id_order" });
    }
  }
  Order.init(
    {
      id_user: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
      underscored: true,
    }
  );
  return Order;
};
