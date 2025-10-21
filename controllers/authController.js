const authService = require("../services/authService");

const login = (req, res) => {
  const accessToken = authService.createAccessToken(req.user);

  res.cookie("accessToken", accessToken, { httpOnly: true });
  res.status(200).json({ message: "Login successful", user: req.user });
};

const register = (req, res) => {
  const message = authService.register();
  return res.status(200).json(message);
};

module.exports = { login, register };
