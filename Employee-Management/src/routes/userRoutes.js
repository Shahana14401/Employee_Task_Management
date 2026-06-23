const express = require("express");
const router = express.Router();

const getAllUsersController = require("../controllers/UsersController/getAllUsers");
const auth = require("../middleware/authMiddleware");

router.get("/get-all-users", auth, getAllUsersController.getAllUsers);

module.exports = router;