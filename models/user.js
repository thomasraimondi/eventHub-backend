const { db } = require("../data/db");

const getUsers = () => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      throw err;
    }
    return results;
  });
};

const getUserByEmail = async (email) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
};

module.exports = { getUsers, getUserByEmail };
