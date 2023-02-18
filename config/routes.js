const express = require("express");
const mainController = require("../controllers/mainController");

module.exports = (app) => {
    app.use("*/static", express.static("static"));
    app.use(mainController);
};