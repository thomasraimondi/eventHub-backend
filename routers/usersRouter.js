const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userController");
const { checkPassword } = require("../middleware/Validation/checkPassword");
const { checkDataUpdateProfile } = require("../middleware/user/checkDataUpdateProfile");

router.get("/", usersController.getUsers);
router.put("/:id/change-password", checkPassword, usersController.updateUser);
router.put("/:id", checkDataUpdateProfile, usersController.updateUser);

module.exports = router;
