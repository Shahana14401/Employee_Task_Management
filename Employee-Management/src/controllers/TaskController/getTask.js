const taskService = require("../../services/TaskService/getTask");

exports.getTask = async (req, res) => {
    try {
        const task = await taskService.getTask(req.user.id);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}