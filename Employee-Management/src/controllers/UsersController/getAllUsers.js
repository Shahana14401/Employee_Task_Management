const UsersService = require("../../services/UsersService/getAllUsers");

exports.getAllUsers = async (req, res) => {
    try {
        const result = await UsersService.getAllUsers(req.user.id);
        if (result) {
            res.status(200).json({ message: "All users", result });
        }
        else {
            res.status(400).json({ message: "No users found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}