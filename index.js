const express = require("express");
const expressConfig = require("./config/express");
const mongodbConfig = require("./config/mongodb");
const routesConfig = require("./config/routes");

const app = express();

start();

async function start(){
    await mongodbConfig();
    expressConfig(app);
    routesConfig(app);

    app.listen(3000, console.log("Server listening on port 3000"));
}