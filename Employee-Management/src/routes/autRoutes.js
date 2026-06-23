const express = require("express");
const router = express.Router();

const registerUserController = require("../controllers/AuthController/registerUser");
const loginController = require("../controllers/AuthController/login");

router.post("/register", registerUserController.register);
router.post("/login", loginController.login);

module.exports = router;