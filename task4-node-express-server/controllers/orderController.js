const router = require("express").Router();
const { Order, order_products } = require("../sequelize/models");

/**
 * find All orders
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.get("/", async (req, res) => {
  try {
    const orders = await Order.findAll({ raw: true, nest: true });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Bad request!" });
  }
});

/**
 * find order by id
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findOne({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json(order.toJSON());
  } catch (err) {
    res.status(400).json({ error: "Order not found!" });
  }
});

/**
 * find order by id and show middle table
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.get("/:id/qty", async (req, res) => {
  try {
    const order = await Order.findOne({
      where: {
        id: Number(req.params.id),
      },
    });
    const middleTableRows = await order_products.findAll({
      raw: true,
      nest: true,
      where: { id_order: req.params.id },
    });

    res.status(200).json(middleTableRows);
  } catch (err) {
    res.status(400).json({ error: "Order not found!" });
  }
});

/**
 * create order
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.post("/", async (req, res) => {
  try {
    const { products } = req.body;

    const order = await Order.create({ id_user: req.user._id });

    // fill order_product table
    for (let product of products) {
      await order_products.create({
        id_order: order.id,
        id_product: product.product_id,
        qty: product.qty,
      });
    }

    res.status(200).json(order.toJSON());
  } catch (err) {
    res.status(400).json({ error: "Not valid order data!" });
  }
});

/**
 * delete order
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.delete("/:id", async (req, res) => {
  try {
    const order = await Order.findOne({ where: { id: req.params.id } });
    if (order.id_user != req.user._id) {
      return res
        .status(500)
        .json({ error: "You can not delete someone's else order!" });
    }

    await order_products.destroy({
      where: { id_order: req.params.id },
    });

    await Order.destroy({
      where: { id: Number(req.params.id) },
    });

    res.status(200).json({
      message: `Order with id ${req.params.id} is successfuly deleted!`,
    });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

/**
 * update order
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.put("/:id", async (req, res) => {
  try {
    const order = await Order.findOne({ where: { id: req.params.id } });
    if (order.id_user != req.user._id) {
      return res
        .status(500)
        .json({ error: "You can not change someone's else order!" });
    }

    const { products } = req.body;
    await Order.update(
      { id_user: req.user._id },
      {
        where: { id: Number(req.params.id) },
      }
    );

    const newOrder = await Order.findOne({
      where: { id: Number(req.params.id) },
    });

    await order_products.destroy({
      where: { id_order: Number(req.user._id) },
    });

    // fill order_product table
    for (let product of products) {
      await order_products.create({
        id_order: newOrder.id,
        id_product: product.product_id,
        qty: product.qty,
      });
    }

    res.status(200).json(newOrder.toJSON());
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Product with that id is not present!" });
  }
});

module.exports = router;
