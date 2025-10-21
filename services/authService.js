const user = require("../models/user");

const login = () => {
  return { message: "Login successful" };
};

const register = () => {
  return { message: "Register successful" };
};

module.exports = { login, register };
