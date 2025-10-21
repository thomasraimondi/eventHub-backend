const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { checkLogin } = require("../middleware/auth/checkLogin");
const { validationDataLogin } = require("../middleware/auth/validationDataLogin");
const { validationDataRegister } = require("../middleware/auth/validationDataRegister");

router.post("/login", validationDataLogin, checkLogin, authController.login);
router.post("/register", validationDataRegister, authController.register);

module.exports = router;
