const userService = require("../services/userService");

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users ? users : { message: "No users found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUsers };
