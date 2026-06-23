const { User, Task } = require("../../models");

exports.getAllTasks = async (userId) => {
    try {
        console.log(userId);
        const user = await User.findOne({ where: { id: userId } });
        if (user.role === "admin") {
            const tasks = await Task.findAll();
            return tasks;
        } else {
            const tasks = await Task.findAll({ where: { userId: userId }, include: User });
            return tasks;
        }
    } catch (error) {
        throw error;
    }
}