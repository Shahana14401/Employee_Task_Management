const Task = require("../../models/Task");
const { User } = require("../../models");

exports.assignTask = async (userId, taskId, taskData) => {
    try {
        const user = await User.findOne({ where: { id: userId } });
        if (user.role === "admin") {
            const task = await Task.create({
                title: taskData.title,
                description: taskData.description,
                status: "Pending",
                userId: taskId,
            });
            return task;
        }
    } catch (error) {
        throw error;
    }
}
