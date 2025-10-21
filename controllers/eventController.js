const eventsService = require("../services/eventsService");

const getEvents = (req, res) => {
  const events = eventsService.getEvents();
  return res.status(200).json(events);
};

module.exports = { getEvents };
