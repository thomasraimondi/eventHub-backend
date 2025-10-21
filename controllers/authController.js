const authService = require("../services/authService");

const login = (req, res) => {
  const message = authService.login();
  return res.status(200).json(message);
};

const register = (req, res) => {
  const message = authService.register();
  return res.status(200).json(message);
};
module.exports = { login, register };
