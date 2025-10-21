const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { checkLogin } = require("../middleware/auth/checkLogin");
const { validationDataLogin } = require("../middleware/auth/validationDataLogin");
const { validationDataRegister } = require("../middleware/auth/validationDataRegister");
const { checkPassword } = require("../middleware/Validation/checkPassword");

router.post("/login", validationDataLogin, checkLogin, authController.login);
router.get("/logout", authController.logout);
router.post("/register", validationDataRegister, checkPassword, authController.register);

module.exports = router;
