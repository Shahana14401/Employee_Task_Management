const TaskService = require("../../services/TaskService/getAllTasks");


exports.getAllTasks = async (req, res) => {
    try {
        const result = await TaskService.getAllTasks(req.user.id);
        if (result) {
            res.status(200).json({ message: "All tasks", result });
        }
        else {
            res.status(400).json({ message: "No tasks found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
