const router = require("express").Router();
const { Product } = require("../sequelize/models");

/**
 * find All products
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll({ raw: true, nest: true });
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Bad request!" });
  }
});

/**
 * find product by id
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json(product.toJSON());
  } catch (err) {
    res.status(400).json({ error: "Product not found!" });
  }
});

/**
 * create product
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.post("/", async (req, res) => {
  const model = req.body;
  try {
    const product = await Product.create({
      name: model.name,
      description: model.description,
      qty: model.qty,
      price: model.price,
      imgUrl: model.imgUrl,
    });

    res.status(200).json(product.toJSON());
  } catch (err) {
    res.status(400).json({ error: "Not valid product data!" });
  }
});

/**
 * delete product
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.delete("/:id", async (req, res) => {
  try {
    await Product.destroy({
      where: { id: Number(req.params.id) },
    });

    res.status(200).json({
      message: `Product with id ${req.params.id} is successfuly deleted!`,
    });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

/**
 * update user
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.put("/:id", async (req, res) => {
  const model = req.body;
  try {
    await Product.update(model, {
      where: { id: req.params.id },
    });

    const product = await Product.findOne({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json(product.toJSON());
  } catch (err) {
    res.status(400).json({ error: "Product with that id is not present!" });
  }
});

module.exports = router;
