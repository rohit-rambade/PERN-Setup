const userService = require('../services/user.service');


const createUser = async (req, res) => {
    const { firstname, lastname } = req.body;
    const user = await userService.createUser({
        firstname,
        lastname
    });
    res.status(201).json({
        status: "success",
        user,
    });
}

module.exports = {
    createUser
}