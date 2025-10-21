const { db } = require("../data/db");

const getUsers = () => {
  const users = db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      throw err;
    }
    return results;
  });
};

module.exports = { getUsers };
