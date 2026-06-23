const loginService = require("../../services/AuthService/login")
exports.login = async (req, res) => {
    try {
        console.log(req.body);
        const user = await loginService.login(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(401).json({ message: error.message })
    }
}