const event = require("../models/event");

const getEvents = () => {
  const events = event.getEvents();
  return events ? events : { message: "No events found" };
};

module.exports = { getEvents };
