const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");

// const path = __dirname + "/frontend/src/app/views/";
const app = express();

// app.use(express.static(path));

// var corsOptions = {
//     origin: "http://localhost:8081",
// };

// app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const users = [];

app.get("/api/users", (req, res, next) => {
    res.json(users);
});
app.post("/api/user", (req, res, next) => {
    const user = req.body.user;
    users.push(user);
    res.json(`user ${JSON.stringify(user)} added`);
});
app.delete("/api/user/:id", (req, res, next) => {
    users.splice(req.params.id, 1);
    res.send("user deleted");
});
app.get("/", (req, res, next) => {
    res.send("app works");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
