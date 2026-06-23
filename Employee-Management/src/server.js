require("dotenv").config();
const app = require("./app");

const sequelize = require("./config/db");

const PORT = process.env.PORT || 5000;

// DB AUTH CHECK
sequelize.authenticate()
    .then(() => console.log("DB Connected"))
    .catch(err => console.log("DB Error:", err));

// 🔥 SYNC TABLES HERE
sequelize.sync({ alter: true })
    .then(() => {
        console.log("Tables synced successfully");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.log("Sync error:", err));