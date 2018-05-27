const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("ws-product-manager");
const chalk = require("chalk");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 9002;
const dbConfig = config.get("dbConfig");

mongoose.connect(dbConfig.mongoUri)
    .then(function(){
        console.log("Successfully connected to database")
    }).catch(function(err){
        console.log("Could not connect to database, Exiting now");
        process.exit();
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
    
require("./src/routes/product.routes")(app);

app.listen(port, function(){
    debug(`The server is lstening on port ${chalk(port)}`);
});