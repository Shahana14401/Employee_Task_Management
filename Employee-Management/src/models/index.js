const sequelize = require("../config/db");

const User = require("./User");
const Task = require("./Task");

// 🔥 associations
User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User, { foreignKey: "userId" });

module.exports = {
    sequelize,
    User,
    Task
};