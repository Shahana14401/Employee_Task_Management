const { User } = require("../../models");

exports.getAllUsers = async (userId) => {
    try {
        const user = await User.findOne({ where: { id: userId } });
        if (user.role === "admin") {
            const users = await User.findAll();
            return users;
        } else {
            const users = await User.findAll({ where: { id: userId } });
            return users;
        }
    } catch (error) {
        throw error;
    }
}   