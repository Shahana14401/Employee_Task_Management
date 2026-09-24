const Task = require("../../models/Task");
const { User } = require("../../models");

exports.assignTask = async (userId, taskId, taskData) => {
    try {
        const user = await User.findOne({ where: { id: userId } });
        if (user.role === "admin") {
            const [task, created] = await Task.upsert(
                {
                    id: taskId, // If exists -> update, else create
                    title: taskData.title,
                    description: taskData.description,
                    status: taskData.status || "Pending",
                    userId: taskData.userId,
                },
                {
                    returning: true
                }
            );
            return {
                task,
                message: created
                    ? "Task assigned successfully"
                    : "Task updated successfully"
            };
        } else {
            throw new Error("You are not authorized to perform this action");
        };
    } catch (error) {
        throw error;
    }
}
