const express = require("express");
var app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

//static Folder
app.use(express.static(path.resolve(__dirname,'files')));

//Route Imports
const data = require("./Routes/dataRoutes");
const user =  require("./Routes/userRoutes");

app.use("/api/v1",data);
app.use("/api/v1",user);

module.exports = app;