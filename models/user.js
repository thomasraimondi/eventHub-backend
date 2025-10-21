const { db } = require("../data/db");

const getUsers = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users", (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
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

const createUser = async (user) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)", [user.name, user.email, user.password, user.role], (err, results) => {
      if (err) {
        reject(err);
      } else {
        const newUser = {
          id: results.insertId,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
        };
        resolve(newUser);
      }
    });
  });
};

module.exports = { getUsers, getUserByEmail, createUser };
