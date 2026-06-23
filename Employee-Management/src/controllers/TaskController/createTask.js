const taskService = require("../../services/TaskService/createTask");

exports.createTask = async (req, res) => {
    try {
        const task = await taskService.createTask(req.user.id, req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
