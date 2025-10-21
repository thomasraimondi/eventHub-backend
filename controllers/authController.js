const authService = require("../services/authService");

const login = (req, res) => {
  const accessToken = authService.createAccessToken(req.user);

  res.cookie("accessToken", accessToken, { httpOnly: true });
  res.status(200).json({ message: "Login successful", user: req.user });
};

const register = async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  };
  const newUser = await authService.register(user);
  const accessToken = authService.createAccessToken(newUser);
  res.cookie("accessToken", accessToken, { httpOnly: true });
  return res.status(201).json({ message: "User created successfully", data: newUser });
};

module.exports = { login, register };
