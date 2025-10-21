const userModels = require("../models/user");
const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES });
};

const createAccessToken = (user) => {
  return generateAccessToken(user);
};

const register = (user) => {
  return userModels.createUser(user);
};

module.exports = { createAccessToken, register };
