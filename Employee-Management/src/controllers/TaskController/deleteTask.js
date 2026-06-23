const taskService = require("../../services/TaskService/deleteTask");

exports.deleteTask = async (req, res) => {
    try {
        const task = await taskService.deleteTask(req.params.id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}