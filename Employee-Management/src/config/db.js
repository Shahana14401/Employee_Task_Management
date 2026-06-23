const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    "employee_task_db",
    "postgres",
    "s@123",
    {
        host: "localhost",
        dialect: "postgres"
    }
);

module.exports = sequelize;