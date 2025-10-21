const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/eventController");

router.get("/", eventsController.getEvents);

module.exports = router;
