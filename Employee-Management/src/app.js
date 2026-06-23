const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const app = express();

// Middleware
app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true
    }
));
app.use(express.json());

sequelize.authenticate()
    .then(() => console.log("Connected"))
    .catch(err => console.log("Error:", err));
// Routes
const authRoutes = require("./routes/autRoutes");
const taskRoutes = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/users", userRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

module.exports = app;