const express = require("express");
const app = express();

const pool = require("./db");
//middlewares

app.use(express.json());

//Routes
app.post("/api/test", async (req, res) => {
    try {
        const { firstname, lastname } = req.body;
        const testUser = await pool.query(
            "INSERT INTO users (firstname, lastname) VALUES($1, $2)",
            [firstname, lastname]
        );
        res.json(testUser)

    } catch (err) {
        console.log(err.message);
        res.json(err.message)
    }
});

app.listen(5000, () => {
    console.log("Server started");
});
