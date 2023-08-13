const pool = require('../config/db')


const createUserDb = async ({ firstname, lastname }) => {
    const user = await pool.query(
        "INSERT INTO users (firstname, lastname) VALUES($1, $2)",
        [firstname, lastname]
    );
    // console.log(user);
    // console.log(user[0]);


    return user[0];

}

module.exports = {
    createUserDb
}