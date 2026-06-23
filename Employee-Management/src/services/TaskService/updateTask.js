const Task = require("../../models/Task");

exports.updateTask = async (id, data) => {
    try {
        const task = await Task.update(data, { where: { id: id } });
        console.log(task);
        return task;
    } catch (error) {
        console.log(error);
        return error;
    }
}