const Task = require("../../models/Task");

exports.deleteTask = async (id) => {
    try {
        const task = await Task.destroy({ where: { id: id } });
        console.log(task);
        return task;
    } catch (error) {
        console.log(error);
        return error;
    }
}