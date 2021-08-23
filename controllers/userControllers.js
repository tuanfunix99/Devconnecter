

//Dependencies
const User = require('../models/User');

//controller create new user
exports.postUser = async (req, res, next) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.setToken();
        res.status(201).send({ token: token });
    }
    catch (err) {
        res.status(400).send(err.message);
    }
}