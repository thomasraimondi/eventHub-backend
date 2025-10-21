const { log } = require("console");
const userModels = require("../../models/user");
const bcrypt = require("bcrypt");

const checkLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModels.getUserByEmail(email);
  console.log("user", user);

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  // TODO: Compare password with bcrypt
  const isPasswordValid = password === user.password;

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  req.user = user;

  next();
};

module.exports = { checkLogin };
