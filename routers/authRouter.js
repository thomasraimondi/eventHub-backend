const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { checkLogin } = require("../middleware/auth/checkLogin");
const { validationDataLogin } = require("../middleware/auth/validationDataLogin");

router.post("/login", validationDataLogin, checkLogin, authController.login);
router.post("/register", authController.register);

module.exports = router;
