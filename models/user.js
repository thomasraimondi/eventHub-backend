const { log } = require("console");
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

const getUserById = async (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM users WHERE id = ?", [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
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

// TODO: Add password hashing
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

const updateUser = async (id, user) => {
  let updateQuery = "UPDATE users SET";
  let values = [];
  if (user.name && user.email && user.role) {
    updateQuery += " name = ?, email = ?, role = ?";
    values.push(user.name, user.email, user.role);
  } else if (user.name && user.role) {
    updateQuery += " name = ?, role = ?";
    values.push(user.name, user.role);
  } else if (user.name && user.email) {
    updateQuery += " name = ?, email = ?";
    values.push(user.name, user.email);
  } else if (user.email && user.role) {
    updateQuery += " email = ?, role = ?";
    values.push(user.email, user.role);
  } else if (user.name) {
    updateQuery += " name = ?";
    values.push(user.name);
  } else if (user.email) {
    updateQuery += " email = ?";
    values.push(user.email);
  } else if (user.role) {
    updateQuery += " role = ?";
    values.push(user.role);
  }

  updateQuery += " WHERE id = ?";
  values.push(id);
  return new Promise((resolve, reject) => {
    db.query(updateQuery, values, async (err, results) => {
      if (err) {
        reject(err);
      } else {
        const updatedUser = await getUserById(id);
        resolve(updatedUser);
      }
    });
  });
};

module.exports = { getUsers, getUserByEmail, createUser, updateUser };
