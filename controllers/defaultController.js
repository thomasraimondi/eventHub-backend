const defaultService = require("../services/defaultService");

const defaultMethod = async (req, res) => {
  try {
    const users = await defaultService.getUsers();
    res.status(200).json(users ? users : { message: "No users found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { defaultMethod };
