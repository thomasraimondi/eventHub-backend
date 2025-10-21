const userModels = require("../models/user");

const getUsers = async () => {
  try {
    const users = await userModels.getUsers();
    return users;
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = { getUsers };
