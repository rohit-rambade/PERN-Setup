const express = require("express");

const app = express();

app.use(express.json());
const userRoute = require('./routes/users')


app.use(userRoute)

app.listen(3000, () => {
    console.log("Server started");
});
