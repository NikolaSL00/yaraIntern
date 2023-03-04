"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const { DB_CREDENTIALS } = require("../../config/env");
const db = {};

const sequelize = new Sequelize(
  DB_CREDENTIALS.db_name,
  DB_CREDENTIALS.username,
  DB_CREDENTIALS.password,
  {
    dialect: "postgres",
    host: DB_CREDENTIALS.host,
    omitNull: true,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 1000,
    },
  }
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
