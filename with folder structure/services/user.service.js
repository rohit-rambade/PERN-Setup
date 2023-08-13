const { createUserDb } = require("../db/user.db")


class UserService {
    createUser = async (user) => {
        try {
            return await createUserDb(user);
        } catch (error) {
            console.log(error.message);

        }
    };
}

module.exports = new UserService();