const router = require("express").Router();
const authService = require("../services/authService");
// const { isGuest, isAuth } = require("../middlewares/authMiddleware");
const { TOKEN_NAME } = require("../config/constants");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await authService.login(username, password);
    const jwUserToken = await authService.createUserToken(user);

    return res.status(200).json({ [TOKEN_NAME]: jwUserToken });
  } catch (error) {
    return res.status(400).send({ error: error });
  }
});

router.post("/register", async (req, res) => {
  const { username, password, first_name, last_name } = req.body;

  try {
    const user = await authService.register({
      username,
      password,
      first_name,
      last_name,
    });
    const jwUserToken = await authService.createUserToken(user);

    return res.status(200).json({ [TOKEN_NAME]: jwUserToken });
  } catch (error) {
    return res.status(400).send({ error: error });
  }
});

module.exports = router;
