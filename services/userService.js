const userModels = require("../models/user");

const getUsers = async () => {
  try {
    const users = await userModels.getUsers();
    return users;
  } catch (error) {
    return { message: error.message };
  }
};

const updateUser = async (id, user) => {
  try {
    const updatedUser = await userModels.updateUser(id, user);
    return updatedUser;
  } catch (error) {
    return { message: error.message };
  }
};

module.exports = { getUsers, updateUser };
