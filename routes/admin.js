const express = require("express");
const adminRouter = express.Router();

adminRouter.get("/", (req, res, next) => {
    res.render("admin_panel");
});

adminRouter.get("/data", (req, res) => {
    res.render("admin_data");
});

module.exports = adminRouter;
