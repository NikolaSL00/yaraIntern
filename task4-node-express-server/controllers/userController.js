const router = require("express").Router();
const { User } = require("../sequelize/models");
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/env");

/**
 * find All users
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({ raw: true, nest: true });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Bad request!" });
  }
});

/**
 * find user by id
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: Number(req.params.id),
      },
    });

    res.status(200).json(user.toJSON());
  } catch (err) {
    res.status(400).json({ error: "User not found!" });
  }
});

/**
 * delete user
 *  @param {import('express').Request} req
 *  @param {import('express').Response} res
 *
 */
router.delete("/", async (req, res) => {
  try {
    await User.destroy({ where: { id: Number(req.user._id) } });
    res.status(200).json({
      message: `Your profile is successfuly deleted!`,
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
router.put("/", async (req, res) => {
  const model = req.body;
  try {
    const { password } = model;
    const hashedPass = await bcrypt.hash(password, SALT_ROUNDS);
    model.password = hashedPass;

    await User.update(model, {
      where: { id: req.user._id },
    });

    const user = await User.findOne({
      where: {
        id: Number(req.user._id),
      },
    });

    res.status(200).json(user.toJSON());
  } catch (err) {
    res.status(400).json({ error: "User with that id is not present!" });
  }
});

module.exports = router;
