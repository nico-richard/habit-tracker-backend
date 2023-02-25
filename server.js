const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const listEndpoints = require("express-list-endpoints");

// If backend is running local
// const cors = require("cors");
// const path = __dirname + "/frontend/src/app/views/";
// app.use(express.static(path));
// var corsOptions = {
//     origin: "http://localhost:8081",
// };
// app.use(cors(corsOptions));

const path = __dirname + "/public";
app.use(express.static(path));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const users = ["nico", "paul", "marc", "pierre", "jacques"];

const adminRouter = require("./routes/admin");
const graphRouter = require("./routes/graph");

// app.get("/api/users", (req, res, next) => {
//     res.json(users);
// });
// app.post("/api/user", (req, res, next) => {
//     const user = req.body.user;
//     users.push(user);
//     res.json(`user ${JSON.stringify(user)} added`);
// });
// app.delete("/api/user/:id", (req, res, next) => {
//     users.splice(req.params.id, 1);
//     res.send("user deleted");
// });

app.use("/api/admin", adminRouter);
app.use("/api/graph", graphRouter);

app.get("/api/", (req, res, next) => {
    res.render("home", { users: users });
});

// console.log(listEndpoints(app));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
