const jwt = require("jsonwebtoken");
const { TOKEN_NAME } = require("../config/constants");
const { SECRET } = require("../config/env");

exports.auth = (req, res, next) => {
  const token = req.header(TOKEN_NAME);

  if (token) {
    jwt.verify(token, SECRET, (err, decodedToken) => {
      if (err) {
        // the user has not valid token so we do not give access
        return res.status(401).send({ error: "Wrong or expired token" });
      }

      console.log(decodedToken);
      req.user = decodedToken;
      res.locals.user = decodedToken;
      next();
    });
  } else {
    // continue as guest
    next();
  }
};

// check if current request is as guest
exports.isAuth = (req, res, next) => {
  if (!req.user) {
    console.log("unauth");
    return res.status(401).send({ error: "Unauthorized request" });
  }

  next();
};

// check if current request is authorized
exports.isGuest = (req, res, next) => {
  if (req.user) {
    return res.status(403).send({ error: "Functionality only for guest user" });
  }

  next();
};
