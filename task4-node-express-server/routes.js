const express = require("express");
const router = express.Router();

const { isAuth, isGuest } = require("./middlewares/authMiddleware");

const userController = require("./controllers/userController");
const productController = require("./controllers/productController");
const orderController = require("./controllers/orderController");
const authController = require("./controllers/authController");

router.use("/users", isAuth, userController);
router.use("/products", isAuth, productController);
router.use("/orders", isAuth, orderController);
router.use("/auth", isGuest, authController);

module.exports = router;
