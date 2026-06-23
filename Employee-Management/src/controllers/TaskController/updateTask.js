const taskService = require("../../services/TaskService/updateTask");

exports.updateTask = async (req, res) => {
    try {
        const task = await taskService.updateTask(req.params.id, req.body);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}