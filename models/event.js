const { db } = require("../data/db");

const getEvents = () => {
  const events = db.query("SELECT * FROM events", (err, results) => {
    if (err) {
      throw err;
    }
    return results;
  });
};

module.exports = { getEvents };
