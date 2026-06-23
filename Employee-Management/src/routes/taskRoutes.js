const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

const getTaskController = require("../controllers/TaskController/getTask");
const createTaskController = require("../controllers/TaskController/createTask");
const updateTaskController = require("../controllers/TaskController/updateTask");
const deleteTaskController = require("../controllers/TaskController/deleteTask");
const assignTaskController = require("../controllers/TaskController/assignTask");
const getAllTasksController = require("../controllers/TaskController/getAllTasks");

router.post("/tasks", auth, createTaskController.createTask);
router.get("/tasks", auth, getTaskController.getTask);
router.put("/tasks/:id", auth, updateTaskController.updateTask);
router.delete("/tasks/:id", auth, deleteTaskController.deleteTask);
router.post("/assign-task/:id", auth, assignTaskController.assignTask);
router.get("/get-all-tasks", auth, getAllTasksController.getAllTasks);

module.exports = router;