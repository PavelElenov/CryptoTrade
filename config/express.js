const hbr = require("express-handlebars");
const express  = require("express");
const cookieParser = require("cookie-parser");
const tokenParser = require("../middlewares/tokenParser");

module.exports = (app) => {
    const handlebars = hbr.create({
        extname: ".hbs",
    });

    app.engine(".hbs", handlebars.engine);
    app.set("view engine", ".hbs");

    app.use(express.urlencoded({extended:true}));
    app.use(cookieParser());
    app.use(tokenParser());
};