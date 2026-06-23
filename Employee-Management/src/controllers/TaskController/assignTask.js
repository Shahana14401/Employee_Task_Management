const TaskService = require("../../services/TaskService/assignTask");

exports.assignTask = async (req, res) => {
    try {
        const result = await TaskService.assignTask(req.user.id, req.params.id, req.body);
        if (result) {
            res.status(200).json({ message: "Task assigned successfully", result });
        }
        else {
            res.status(400).json({ message: "Task not assigned" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}