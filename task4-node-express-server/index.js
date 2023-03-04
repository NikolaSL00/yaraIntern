const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/env");
const { sequelize } = require("./sequelize/models/index.js");
const routes = require("./routes.js");
const { auth } = require("./middlewares/authMiddleware");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", PORT);
app.use(auth);
app.use(routes);

const server = http.createServer(app);

const connDB = async () => {
  console.log("Checking DB connection!");

  try {
    await sequelize.authenticate();
    console.log("Database connection established!");
  } catch (err) {
    console.log("Database connection failed!", err);
    process.exit(1);
  }
};
(async () => {
  await connDB();
  server.listen(PORT, () => console.log(`listening on port ${PORT}`));
})();
