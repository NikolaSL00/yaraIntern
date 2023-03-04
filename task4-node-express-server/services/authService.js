const { User } = require("../sequelize/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { SECRET } = require("../config/env");

exports.login = async (username, password) => {
  const user = await User.findOne({
    where: {
      username,
    },
  });

  if (!user) {
    throw {
      message: `Wrong username or password!`,
    };
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw {
      message: `Wrong username or password!`,
    };
  }
  return user;
};

exports.register = async (userData) => {
  const { username, ..._ } = userData;

  const usernameCheck = await User.findOne({ where: { username } });
  if (usernameCheck) {
    throw {
      message: `User with that username already exists!`,
    };
  }

  return User.create({ ...userData });
};

exports.createUserToken = (user) => {
  const payload = {
    _id: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
  };

  const options = {
    expiresIn: "3h",
  };

  const tokenPromise = new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET, options, (err, decodedToken) => {
      if (err) {
        return reject(err);
      }

      resolve(decodedToken);
    });
  });

  return tokenPromise;
};
