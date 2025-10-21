const userService = require("../services/userService");
const { checkPassword } = require("../middleware/Validation/checkPassword");

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users ? users : { message: "No users found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  let user;

  if (req.body.password) {
    user = {
      password: req.body.password,
    };
  } else {
    user = {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
    };
  }

  console.log("user", user);
  try {
    const updatedUser = await userService.updateUser(id, user);
    res.status(200).json(updatedUser ? updatedUser : { message: "User not found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUsers, updateUser };
