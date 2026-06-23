const { Task, User } = require("../../models");
// const User = require("../../models/User");


exports.getTask = async (userId) => {
    try {
        const task = await Task.findAll({
            where: { userId: userId },
            include: [
                {
                    model: User,
                    attributes: ["id", "name", "email"]
                }
            ]
        });
        console.log(task);
        return task;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
