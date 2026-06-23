const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/User");

exports.login = async (data) => {
    try {
        const { userName, password } = data;
        const user = await User.findOne({
            where: { userName: userName }
        });

        if (!user) {
            throw new Error("User not found");
        }

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            throw new Error("Invalid credentials");
        }
        const token = jwt.sign(
            { id: user.id, userName: user.userName },
            process.env.JWT_SECRET,
            { expiresIn: "1h" });
        console.log(token);
        return { token };
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}