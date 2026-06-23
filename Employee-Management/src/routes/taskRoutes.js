const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const getTaskController = require("../controllers/TaskController/getTask");
const createTaskController = require("../controllers/TaskController/createTask");
const updateTaskController = require("../controllers/TaskController/updateTask");
const deleteTaskController = require("../controllers/TaskController/deleteTask");

router.post("/tasks", auth, createTaskController.createTask);
router.get("/tasks", auth, getTaskController.getTask);
router.put("/tasks/:id", auth, updateTaskController.updateTask);
router.delete("/tasks/:id", auth, deleteTaskController.deleteTask);

module.exports = router;