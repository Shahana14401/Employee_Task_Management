const bcrypt = require("bcryptjs");
const User = require("../../models/User")
exports.registerUser = async (data) => {
    try {
        const { name, email, password, userName } = data;
        const hashedPssword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            userName,
            password: hashedPssword
        });
        return user;
    } catch (error) {
        console.log(error);
    }
}