const express = require("express");
const mainController = require("../controllers/mainController");
const createConroller = require("../controllers/createController");
const catalogConroller = require("../controllers/catalogController");
const detailsConroller = require("../controllers/detailsController");
const buyController = require("../controllers/buyController");
const deleteController = require("../controllers/deleteController");
const editController = require("../controllers/editController");
const searchController= require("../controllers/searchController");

module.exports = (app) => {
    app.use("*/static", express.static("static"));
    app.use(mainController);
    app.use("/create", createConroller);
    app.use("/catalog", catalogConroller);
    app.use("/details", detailsConroller);
    app.use("/buy", buyController);
    app.use("/delete", deleteController);
    app.use("/edit", editController);
    app.use("/search", searchController);
    app.use("/*", (req, res) => {
        res.render("404");
    });
};