const user = require("../models/user");

const getUsers = async () => {
  try {
    const users = await user.getUsers();
    return users;
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = { getUsers };
