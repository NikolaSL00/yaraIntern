"use strict";
const { Sequelize, Model } = require("sequelize");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../../config/env");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, { foreignKey: "id_user" });
    }
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      underscored: true,
    }
  );

  const hashPasswordOnChange = async function (user) {
    const hashedPass = await bcrypt.hash(user.password, SALT_ROUNDS);
    user.password = hashedPass;
  };
  User.beforeCreate(hashPasswordOnChange);

  return User;
};
