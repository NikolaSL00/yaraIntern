module.exports = {
  development: {
    url: "postgres://admin:admin@localhost:5432/yara-sequelize",
    dialect: "postgres",
    dialectOptions: {
      ssl: false,
    },
  },
  test: {
    url: "postgres://admin:admin@localhost:5432/yara-sequelize",
    dialect: "postgres",
    dialectOptions: {
      ssl: false,
    },
  },
  production: {
    url: "postgres://admin:admin@localhost:5432/yara-sequelize",
    dialect: "postgres",
    dialectOptions: {
      ssl: false,
    },
  },
};
