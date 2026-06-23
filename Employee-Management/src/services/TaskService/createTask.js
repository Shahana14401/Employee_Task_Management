const Task = require("../../models/Task");

exports.createTask = async (userId, data) => {
    try {
        const task = await Task.create({
            userId: userId,
            title: data.title,
            description: data.description,
            status: "Pending"
        });
        console.log(task);
        return task;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

